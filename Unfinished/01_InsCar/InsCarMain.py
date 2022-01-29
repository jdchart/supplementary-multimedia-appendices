from ast import literal_eval
import os as os
import os.path
import memex
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib
import shutil
import tkinter as tk
from tkinter import ttk
from matplotlib import style
from matplotlib.figure import Figure
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from matplotlib.backends.backend_tkagg import NavigationToolbar2Tk
matplotlib.use('TkAgg')


large_font = ('Verdana', 12)
normal_font = ('Verdana', 10)
small_font = ('Verdana', 8)
style.use('ggplot')

"""
f = Figure()
a = f.add_subplot(111)
G = nx.Graph()
"""

original_wd = os.getcwd()
user_dict = {}
bad_chars = [' ', '/', ',', '@', '.', '-', '"', "'"]


def start_up():

    global user_dict
    global original_wd
    os.chdir(original_wd)

    # Seeing if user data folder exists (if not, creates it).
    # Also sets the cwd as this folder:
    current_cwd = os.getcwd()
    if os.path.exists(current_cwd + '/userdata/'):
        pass
    else:
        os.makedirs(current_cwd + '/userdata/')
    local_cwd = current_cwd + '/userdata/'

    # Seeing if users.txt exists (if not, creates it):
    if os.path.isfile(local_cwd + '/users.txt'):
        pass
    else:
        with open(local_cwd + '/users.txt', 'w') as f:
            f.write(str({0: {'username': 'ExampleSession', 'password': ''}}))
        direc = local_cwd + 'ExampleSession/memex_entries/'
        direc2 = local_cwd + 'ExampleSession/projects/'
        os.makedirs(direc)
        os.makedirs(direc2)

    # Populate user dict with contents of users.txt:
    with open(local_cwd + '/users.txt', 'r') as f:
        provisional_contents = ''
        size_to_read = 10
        f_contents = f.read(size_to_read)
        while len(f_contents) > 0:
            provisional_contents = provisional_contents + f_contents
            f_contents = f.read(size_to_read)
        user_dict = literal_eval(provisional_contents)


def popupmsg(msg):
    popup = tk.Tk()

    def leavemini():
        popup.destroy()

    popup.wm_title("!")
    label = tk.Label(popup, text=msg, font=normal_font)
    label.pack(side='top', fill='x', pady=10)
    b1 = ttk.Button(popup, text="OK", command=leavemini)
    # The command can just be command=popup.destroy
    b1.pack()
    popup.mainloop()


"""
def updateGraph():
    # pullData = open('sampleData.txt', 'r').read()
    # dataList = pullData.split('\n')
    df = pd.DataFrame({'from': ['Albert', 'B', 'C', 'Albert'],
                       'to': ['D', 'Albert', 'E', 'C']})

    # nx.Graph()
    # G.clear()
    # G.add_node(1)
    # G.add_node(2)
    # G.add_edge(1, 2)
    G = nx.from_pandas_edgelist(df, 'from', 'to')

    # xList = []
    # yList = []
    # for eachLine in dataList:
    #     if len(eachLine) > 1:
    #         x, y = eachLine.split(',')
    #         xList.append(int(x))
    #         yList.append(int(y))
    a.clear()
    # a.plot(xList, yList)

    nx.draw(G, ax=a, with_labels=True)

    title = 'A cool graph!'
    a.set_title(title)
    print(nx.info(G))
"""


class InsCarWin(tk.Tk):

    def __init__(self, *args, **kwargs):
        tk.Tk.__init__(self, *args, **kwargs)

        tk.Tk.wm_title(self, "Instrument Cartographer")

        container = tk.Frame(self)
        container.pack(side='top', fill='both', expand=True)
        container.grid_rowconfigure(0, weight=1)
        container.grid_columnconfigure(0, weight=1)

        """
        menubar = tk.Menu(container)
        filemenu = tk.Menu(menubar, tearoff=0)
        filemenu.add_command(label="Save settings",
                             command=lambda: popupmsg("Not yet supported!"))
        filemenu.add_separator()
        filemenu.add_command(label="Exit", command=quit)
        menubar.add_cascade(label="File", menu=filemenu)
        tk.Tk.config(self, menu=menubar)
        """

        self.frames = {}

        # All page names are to be added here for navigation:
        for F in (LoginPage, HomePage):

            frame = F(container, self)

            self.frames[F] = frame

            frame.grid(row=0, column=0, sticky="nsew")

        self.show_frame(LoginPage)

    def show_frame(self, cont):
        frame = self.frames[cont]
        frame.tkraise()


class HomePage(tk.Frame):

    def __init__(self, parent, controller):

        def frame_update():
            # Status bar:
            userLabel.config(text=memex.user)

        tk.Frame.__init__(self, parent)

        # Creating the various frames:
        graph_frame = tk.Frame(self)
        graph_frame.config(borderwidth=1)
        graph_frame.grid(row=0, column=0)
        memex_frame = tk.Frame(self)
        memex_frame.config(borderwidth=1)
        memex_frame.grid(row=0, column=1)

        g_toolbar_frame = tk.Frame(graph_frame)
        g_toolbar_frame.grid(row=0, column=0)
        g_canvas_frame = tk.Frame(graph_frame)
        g_canvas_frame.grid(row=1, column=0)

        m_edit_frame = tk.Frame(memex_frame)
        m_edit_frame.config(borderwidth=1)
        m_edit_frame.grid(row=0, column=0)
        m_toolbar_frame = tk.Frame(m_edit_frame)
        m_toolbar_frame.grid(row=0, column=0)
        m_edit_list_frame = tk.Frame(m_edit_frame)
        m_edit_list_frame.grid(row=1, column=0)
        m_entry_display_frame = tk.Frame(memex_frame)
        m_entry_display_frame.grid(row=1, column=0)

        status_frame = tk.Frame(self)
        status_frame.config(borderwidth=1, relief='groove')
        status_frame.grid(row=1, column=0, columnspan=2)

        # Status bar:
        titleLabel = tk.Label(status_frame,
                              text='Instrument Cartographer v0.1 Logged in as: ',
                              font=small_font)
        titleLabel.grid(row=0, column=0)
        print(memex.user)
        userLabel = tk.Label(status_frame, text=memex.user,
                             font=small_font)
        userLabel.grid(row=0, column=1)

        # Memex toolbar buttons:
        m_toolbar_new = tk.Button(m_toolbar_frame, text='New', width=3, font=small_font)
        m_toolbar_dup = tk.Button(m_toolbar_frame, text='x2', width=3, font=small_font)
        m_toolbar_del = tk.Button(m_toolbar_frame, text='Del', width=3, font=small_font)
        m_toolbar_cat = tk.Button(m_toolbar_frame, text='Cat', width=3, font=small_font)
        m_toolbar_dis = tk.Button(m_toolbar_frame, text='Dis', width=3, font=small_font)
        m_toolbar_fil = tk.Button(m_toolbar_frame, text='Fil', width=3, font=small_font)
        m_toolbar_new.grid(row=0, column=0)
        m_toolbar_dup.grid(row=0, column=1)
        m_toolbar_del.grid(row=0, column=2)
        m_toolbar_cat.grid(row=0, column=3)
        m_toolbar_dis.grid(row=0, column=4)
        m_toolbar_fil.grid(row=0, column=5)

        # Memex Listbox:
        m_listbox = tk.Listbox(m_edit_list_frame)
        m_listbox.grid(row=0, column=0)

        """
        canvas = FigureCanvasTkAgg(f, self)
        canvas.draw()
        canvas.get_tk_widget().pack(side=tk.TOP, fill=tk.BOTH, expand=True)

        toolbar = NavigationToolbar2Tk(canvas, self)
        toolbar.update()
        canvas._tkcanvas.pack(side=tk.TOP, fill=tk.BOTH, expand=True)
        """
        print(self)


class LoginPage(tk.Frame):

    username = ''
    password = ''

    def __init__(self, parent, controller):

        def create_user_message():
            popup = tk.Tk()

            def user_create(self):
                global user_dict
                owd = os.getcwd()
                cwd = owd + '/userdata'
                idx = len(user_dict)
                uname = nameEntry.get()
                pswrd = pswdEntry.get()
                validname = True
                can_create = False
                i = 0
                while i < idx:
                    name_check_dict = user_dict[i]
                    name_check = name_check_dict['username']
                    if uname == name_check:
                        validname = False
                        break
                    else:
                        i += 1

                global bad_chars
                for item in bad_chars:
                    if item in uname:
                        validname = False
                    if item in pswrd:
                        validname = False

                if validname:
                    if uname == '':
                        can_create = False
                    else:
                        can_create = True
                if can_create:
                    newdict = {}
                    newdict['username'] = uname
                    newdict['password'] = pswrd
                    user_dict[idx] = newdict

                    open(cwd + '/users.txt', 'w').close()

                    with open(cwd + '/users.txt', 'w') as f:
                        f.write(str(user_dict))

                    direc = cwd + '/' + uname + '/memex_entries/'
                    direc2 = cwd + '/' + uname + '/projects/'
                    os.makedirs(direc)
                    os.makedirs(direc2)
                    populate_user_list(self)
                    os.chdir(owd)
                    popup.destroy()
                else:
                    nameEntry.delete(0, tk.END)
                    pswdEntry.delete(0, tk.END)

            def leavemini():
                popup.destroy()

            popup.wm_title("New Session")

            nameLabel = tk.Label(popup, text='Username: ', font=normal_font)
            pswdLabel = tk.Label(popup, text='Password: ', font=normal_font)
            nameLabel.grid(row=0, column=0, sticky='w')
            pswdLabel.grid(row=1, column=0, sticky='w')

            nameEntry = ttk.Entry(popup)
            pswdEntry = ttk.Entry(popup)
            nameEntry.grid(row=0, column=1, sticky='e')
            pswdEntry.grid(row=1, column=1, sticky='e')

            confirmButton = ttk.Button(popup, text="OK",
                                       command=lambda: user_create(popup))
            cancelButton = ttk.Button(popup, text="Cancel", command=leavemini)
            confirmButton.grid(row=2, column=0, sticky='e')
            cancelButton.grid(row=2, column=1, sticky='w')
            nameEntry.bind('<Return>', lambda x: user_create(popup))
            pswdEntry.bind('<Return>', lambda x: user_create(popup))

            popup.mainloop()

        def set_username(self):
            sel = userList.get(userList.curselection())
            userEntry.delete(0, tk.END)
            passwordEntry.delete(0, tk.END)
            userEntry.insert(0, sel)

        def login_button():
            usern = userEntry.get()
            passw = passwordEntry.get()
            global user_dict
            user_exists = False
            list_len = len(user_dict)
            i = 0
            session = {}
            session_idx = 0
            while i < list_len:
                test_session = user_dict[i]
                test_session = test_session['username']
                if test_session == usern:
                    user_exists = True
                    session_idx = i
                    break
                else:
                    user_exists = False
                i += 1
            if user_exists:
                session = user_dict[session_idx]
                if passw == session['password']:
                    memex.session_start(usern)
                    # HomePage.frame_update()
                    controller.show_frame(HomePage)
                else:
                    userEntry.delete(0, tk.END)
                    passwordEntry.delete(0, tk.END)
            else:
                userEntry.delete(0, tk.END)
                passwordEntry.delete(0, tk.END)

        def duplicate_user():
            popup = tk.Tk()

            sel = userList.get(userList.curselection())

            owd = os.getcwd()
            sel_mem_entr_dir = owd + '/userdata/' + sel + '/memex_entries/'
            sel_us_data_dir = owd + '/userdata/' + sel + '/'
            sel_pro_entr_dir = owd + '/userdata/' + sel + '/projects/'

            interdic_dir = owd + '/userdata/' + sel + '/memex_entries'
            interdic_dir2 = owd + '/userdata/' + sel + '/projects'

            def user_duplicate(self):
                global user_dict
                owd = os.getcwd()
                cwd = owd + '/userdata'
                idx = len(user_dict)
                uname = nameEntry.get()
                pswrd = pswdEntry.get()
                validname = True
                can_create = False
                i = 0
                while i < idx:
                    name_check_dict = user_dict[i]
                    name_check = name_check_dict['username']
                    if uname == name_check:
                        validname = False
                        break
                    else:
                        i += 1
                if validname:
                    if uname == '':
                        can_create = False
                    else:
                        can_create = True

                global bad_chars
                for item in bad_chars:
                    if item in uname:
                        can_create = False
                    if item in pswrd:
                        can_create = False

                if can_create:
                    newdict = {}
                    newdict['username'] = uname
                    newdict['password'] = pswrd
                    user_dict[idx] = newdict

                    open(cwd + '/users.txt', 'w').close()

                    with open(cwd + '/users.txt', 'w') as f:
                        f.write(str(user_dict))

                    direc = cwd + '/' + uname + '/memex_entries/'
                    direc2 = cwd + '/' + uname + '/projects/'
                    os.makedirs(direc)
                    os.makedirs(direc2)
                    populate_user_list(self)
                    os.chdir(owd)

                    new_mem_entr_dir = owd + '/userdata/' + uname + '/memex_entries/'
                    new_us_data_dir = owd + '/userdata/' + uname + '/'
                    new_pro_entr_dir = owd + '/userdata/' + uname + '/projects/'

                    # Copying files: sel_pro_entr_dir
                    for item in os.listdir(sel_mem_entr_dir):
                        src = sel_mem_entr_dir + item
                        dst = new_mem_entr_dir + item
                        shutil.copyfile(src, dst)

                    for item in os.listdir(sel_pro_entr_dir):
                        src = sel_pro_entr_dir + item
                        dst = new_pro_entr_dir + item
                        shutil.copyfile(src, dst)

                    for item in os.listdir(sel_us_data_dir):
                        src = sel_us_data_dir + item
                        dst = new_us_data_dir + item
                        if src != interdic_dir and src != interdic_dir2:
                            shutil.copyfile(src, dst)
                        else:
                            pass

                    popup.destroy()
                else:
                    nameEntry.delete(0, tk.END)
                    pswdEntry.delete(0, tk.END)

            def leavemini():
                popup.destroy()

            popup.wm_title("Duplicate Session")

            nameLabel = tk.Label(popup, text='New Username: ',
                                 font=normal_font)
            pswdLabel = tk.Label(popup, text='New Password: ',
                                 font=normal_font)
            nameLabel.grid(row=1, column=0, sticky='w')
            pswdLabel.grid(row=2, column=0, sticky='w')
            oldNameLabel = tk.Label(popup, text='Old Session: ' + sel,
                                    font=normal_font)
            oldNameLabel.grid(row=0, column=0, columnspan=2)

            nameEntry = ttk.Entry(popup)
            pswdEntry = ttk.Entry(popup)
            nameEntry.grid(row=1, column=1, sticky='e')
            pswdEntry.grid(row=2, column=1, sticky='e')

            confirmButton = ttk.Button(popup, text="OK",
                                       command=lambda: user_duplicate(popup))
            cancelButton = ttk.Button(popup, text="Cancel", command=leavemini)
            confirmButton.grid(row=3, column=0, sticky='e')
            cancelButton.grid(row=3, column=1, sticky='w')
            nameEntry.bind('<Return>', lambda x: user_duplicate(popup))
            pswdEntry.bind('<Return>', lambda x: user_duplicate(popup))

            popup.mainloop()

        def delete_user():

            sel = userList.get(userList.curselection())

            popup = tk.Tk()

            def delete_confirm():
                if sel != 'ExampleSession':
                    global user_dict
                    to_delete = 0
                    dict_len = len(user_dict)
                    i = 0
                    while i < dict_len:
                        check_ses = user_dict[i]
                        usrname = check_ses['username']
                        if usrname == sel:
                            to_delete = i
                            break
                        else:
                            pass
                        i += 1
                    del user_dict[to_delete]

                    # Rewrite dictionary
                    new_dict = {}
                    new_key = 0

                    for key, value in user_dict.items():
                        new_dict[new_key] = value
                        new_key += 1

                    user_dict.clear()
                    user_dict = new_dict

                    # Rewrite dictionary file
                    owd = os.getcwd()
                    cwd = owd + '/userdata'

                    open(cwd + '/users.txt', 'w').close()

                    with open(cwd + '/users.txt', 'w') as f:
                        f.write(str(user_dict))

                    # Delete files:
                    os.chdir(cwd)
                    dir_to_delete = sel + '/memex_entries/'
                    dir_to_delete2 = sel + '/'
                    dir_to_delete3 = sel + '/projects/'
                    shutil.rmtree(dir_to_delete)
                    shutil.rmtree(dir_to_delete3)
                    shutil.rmtree(dir_to_delete2)

                    populate_user_list(self)
                    os.chdir(owd)
                    leavemini()
                else:
                    leavemini()

            def leavemini():
                popup.destroy()

            popup.wm_title("Delete Session")
            message = tk.Label(popup,
                               text='Are you sure you want to delete this session\nand all associated files?',
                               font=normal_font)
            uname = '"' + sel + '"'
            nameLabel = tk.Label(popup, text=uname)
            message.grid(row=0, column=0, columnspan=2)
            nameLabel.grid(row=1, column=0, columnspan=2)
            confirmButton = ttk.Button(popup, text='Yes',
                                       command=delete_confirm)
            confirmButton.grid(row=2, column=0)
            cancelButton = ttk.Button(popup, text='No', command=leavemini)
            cancelButton.grid(row=2, column=1)

        def populate_user_list(self):
            global user_dict
            list_len = len(user_dict)
            i = 0
            userList.delete(0, tk.END)
            while i < list_len:
                user_list = user_dict[i]
                name = user_list['username']
                userList.insert(i, name)
                i += 1
            userList.select_set(0)

        tk.Frame.__init__(self, parent)

        titleLabel = tk.Label(self,
                              text='Instrument Cartographer Session Login')
        titleLabel.config(font=large_font)
        titleLabel.grid(row=0, column=0, columnspan=3)

        entryFrame = tk.Frame(self)
        entryFrame.grid(row=1, column=0)
        listFrame = tk.Frame(self)
        listFrame.grid(row=1, column=1)

        userLabel = tk.Label(entryFrame, text='Username:', font=normal_font)
        userLabel.grid(row=0, column=0, sticky='e')
        passwordLabel = tk.Label(entryFrame, text='Password:',
                                 font=normal_font)
        passwordLabel.grid(row=1, column=0, sticky='e')

        userEntry = ttk.Entry(entryFrame)
        userEntry.grid(row=0, column=1, sticky='e', columnspan=3)
        passwordEntry = ttk.Entry(entryFrame, show="*")
        passwordEntry.grid(row=1, column=1, sticky='e', columnspan=3)

        userEntry.bind('<Return>', lambda x: login_button())
        passwordEntry.bind('<Return>', lambda x: login_button())

        loginButton = ttk.Button(entryFrame, text='Login',
                                 command=login_button)

        loginButton.grid(row=2, column=1, sticky='w')
        quitButton = ttk.Button(entryFrame, text='Quit',
                                command=quit)
        quitButton.grid(row=2, column=2, sticky='e')

        newUserButton = ttk.Button(listFrame, text='New', width=3,
                                   command=create_user_message)
        newUserButton.grid(row=0, column=0)
        dupUserButton = ttk.Button(listFrame, text='x2', width=3,
                                   command=duplicate_user)
        dupUserButton.grid(row=0, column=1)
        delUserButton = ttk.Button(listFrame, text='Del', width=3,
                                   command=delete_user)
        delUserButton.grid(row=0, column=2)

        userList = tk.Listbox(listFrame, font=normal_font)
        userList.config(width=23)
        userList.grid(row=1, column=0, columnspan=5)
        populate_user_list(self)
        userList.bind('<Double-Button-1>', set_username)


start_up()
app = InsCarWin()
# app.geometry("1280x720")
# updateGraph()
app.mainloop()
