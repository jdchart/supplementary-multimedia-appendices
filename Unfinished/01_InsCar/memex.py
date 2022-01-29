from ast import literal_eval
import os.path
import os as os
import random

global_memex = {}
user = ''
cwd = os.getcwd()


def session_start(username):
    global user
    global global_memex
    global cwd
    user = username

    cwd = os.getcwd()

    # Seeing if user data folder exists (if not, creates it).
    # Also sets the cwd as this folder:
    if os.path.exists(cwd + '/userdata/' + user + '/'):
        pass
    else:
        os.makedirs(cwd + '/userdata/' + user + '/')
    cwd = cwd + '/userdata/' + user + '/'

    # Seeing if global_memex.txt exists (if not, creates it):
    if os.path.isfile(cwd + 'global_memex.txt'):
        pass
    else:
        with open(cwd + 'global_memex.txt', 'w') as f:
            f.write('{}')

    # Sees if the memex_entries folder exists (if not, creates it):
    if os.path.exists(cwd + 'memex_entries/'):
        pass
    else:
        os.makedirs(cwd + 'memex_entries/')

    # Sees if the projects folder exists (if not, creates it):
    if os.path.exists(cwd + 'projects/'):
        pass
    else:
        os.makedirs(cwd + 'projects/')

    # Populate global_memex dict with contents of global_memex_user.txt:
    with open(cwd + 'global_memex.txt', 'r') as f:
        provisional_contents = ''
        size_to_read = 10
        f_contents = f.read(size_to_read)
        while len(f_contents) > 0:
            provisional_contents = provisional_contents + f_contents
            f_contents = f.read(size_to_read)
        global_memex = literal_eval(provisional_contents)


def get_entry(idx):
    direc = global_memex[idx]
    entry_dict = {}
    with open(cwd + direc, 'r') as f:
        provisional_contents = ''
        size_to_read = 10
        f_contents = f.read(size_to_read)
        while len(f_contents) > 0:
            provisional_contents = provisional_contents + f_contents
            f_contents = f.read(size_to_read)
        entry_dict = literal_eval(provisional_contents)
    return entry_dict


def remove_entry(idx):
    global cwd
    global global_memex
    memex_len = len(global_memex)
    wd = cwd
    i = idx + 1
    ii = idx
    a = 0

    # Deleting in the memex:
    del global_memex[idx]
    # Deleting the entry file:
    cwd = cwd + '/memex_entries/'
    os.remove(cwd + 'entry_' + str(idx) + '.txt')
    # Renaming other entry files:
    while i < memex_len:
        os.rename(cwd + 'entry_' + str(i) + '.txt',
                  cwd + 'entry_' + str(ii) + '.txt')
        i += 1
        ii += 1

    # Resetting the working directory:
    cwd = wd

    # Renaming global memex keys and values:
    new_dict = {}
    while a < (memex_len - 1):
        new_dict[a] = 'memex_entries/entry_' + str(a) + '.txt'
        a += 1

    global_memex = new_dict

    # Rewriting the memex file:
    os.remove(cwd + 'global_memex.txt')
    with open(cwd + 'global_memex.txt', 'w') as f:
        f.write(str(global_memex))


class MemexEntry:

    def __init__(self, *args, **kwargs):

        self.entry_dict = {}
        self.entry_name = ''
        i = 0

        self.uniqueid = 0
        uniqueid_list = []
        memex_len = len(global_memex)

        # Creating a unique ID from 1 to 100000:
        if memex_len == 0:
            self.uniqueid = random.randint(1, 100000)
        else:
            while i < memex_len:
                check_dict = get_entry(i)
                existing_id = check_dict['id']
                uniqueid_list.append(existing_id)
                i += 1

                while self.uniqueid in uniqueid_list:
                    self.uniqueid = random.randint(1, 10000)

        idx = memex_len

        if 'name' in kwargs:
            name = kwargs['name']
        else:
            name = 'Unspecified'

        if 'dsc' in kwargs:
            dsc = kwargs['dsc']
        else:
            dsc = 'Unspecified'

        if 'type' in kwargs:
            type = kwargs['type']
        else:
            type = 'Unspecified'

        if 'stype' in kwargs:
            stype = kwargs['stype']
        else:
            stype = 'Unspecified'

        # Create the entry_dict and create entry file:
        MemexEntry.create_entry(self, name, dsc, type, stype)
        with open(cwd + 'memex_entries/entry_' + str(idx) + '.txt', 'w') as f:
            f.write(str(self.entry_dict))

        # Adding to global memex file:
        self.entry_name = 'memex_entries/entry_' + str(idx) + '.txt'
        global_memex[idx] = self.entry_name

        # Rewrite the global_memex_user.txt file:
        with open(cwd + 'global_memex.txt', 'w') as f:
            f.write(str(global_memex))

        return None

    def create_entry(self, name, dsc, type, stype):
        self.entry_dict['name'] = name
        self.entry_dict['dsc'] = dsc
        self.entry_dict['type'] = type
        self.entry_dict['stype'] = stype
        self.entry_dict['links'] = []
        self.entry_dict['supers'] = []
        self.entry_dict['subs'] = []
        self.entry_dict['id'] = self.uniqueid
        return self.entry_dict

    def get_entry_dict(self):

        with open(cwd + self.entry_name, 'r') as f:
            provisional_contents = ''
            size_to_read = 10
            f_contents = f.read(size_to_read)
            while len(f_contents) > 0:
                provisional_contents = provisional_contents + f_contents
                f_contents = f.read(size_to_read)
            self.entry_dict = literal_eval(provisional_contents)
        return self.entry_dict


"""
obj1 = MemexEntry(
    name='Trumpet Piston',
    dsc='A mechanism for changing pitch',
    type='Material',
    stype='Intermediary')
"""


# session_start('Jacob')
# print(global_memex)
