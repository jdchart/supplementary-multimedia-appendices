# Modules:
import pandas as pd
import numpy as np
import networkx as nx
import matplotlib
from matplotlib import style
from matplotlib.figure import Figure
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg

import os as os
import shutil as shutil
import tkinter as tk
from tkinter import ttk
from ast import literal_eval
matplotlib.use('TkAgg')

# Global variables:
large_font = ('Verdana', 12)
normal_font = ('Verdana', 10)
small_font = ('Verdana', 8)
owd = os.getcwd()
bad_chars = [' ', '/', ',', '@', '.', '-', '"', "'"]
user = ''


def create_home_window():
    home_window = HomePage()
    HomePage.create_window(home_window)


class LoginPage():

    # If new user data folders are added, modify code in the following places:
    # create_new_user(), duplicate_user().

    user_dict = {}

    def start_up():
        global owd
        os.chdir(owd)

        # Seeing if user data folder exists (if not, creates it).
        # Also sets the cwd as this folder:
        cwd = os.getcwd()
        if os.path.exists(cwd + '/userdata/'):
            pass
        else:
            os.makedirs(cwd + '/userdata/')
        lwd = cwd + '/userdata/'

        # Seeing if users.txt exists (if not, creates it):
        if os.path.isfile(lwd + '/users.txt'):
            pass
        else:
            LoginPage.create_new_user('ExampleSession', '')

        # Populate user_dict with contents of users.txt:
        with open(lwd + '/users.txt', 'r') as f:
            provisional_contents = ''
            size_to_read = 10
            f_contents = f.read(size_to_read)
            while len(f_contents) > 0:
                provisional_contents = provisional_contents + f_contents
                f_contents = f.read(size_to_read)
            LoginPage.user_dict = literal_eval(provisional_contents)

    def new_user_popup(self):

        def leavemini():
            popup.destroy()

        def user_create():
            global bad_chars
            idx = len(LoginPage.user_dict)
            user = name_entry.get()
            passwrd = pswd_entry.get()
            validname = True

            i = 0
            while i < idx:
                name_check_dict = LoginPage.user_dict[i]
                name_check = name_check_dict['username']
                if user == name_check:
                    validname = False
                    break
                else:
                    i += 1

            for item in bad_chars:
                if item in user:
                    validname = False
                if item in passwrd:
                    validname = False

            if validname:
                if user == '':
                    validname = False
                else:
                    validname = True

            if validname:
                LoginPage.create_new_user(user, passwrd)
                LoginPage.populate_user_list(self)
                leavemini()
            else:
                name_entry.delete(0, tk.END)
                pswd_entry.delete(0, tk.END)

        popup = tk.Tk()
        popup.wm_title("New Session")

        name_label = tk.Label(popup, text='Username: ', font=normal_font)
        pswd_label = tk.Label(popup, text='Password: ', font=normal_font)
        name_label.grid(row=0, column=0, sticky='w')
        pswd_label.grid(row=1, column=0, sticky='w')

        name_entry = ttk.Entry(popup, font=normal_font)
        pswd_entry = ttk.Entry(popup, font=normal_font)
        name_entry.grid(row=0, column=1, sticky='e')
        pswd_entry.grid(row=1, column=1, sticky='e')

        confirmButton = ttk.Button(popup, text="OK", command=user_create)
        cancelButton = ttk.Button(popup, text="Cancel", command=leavemini)
        confirmButton.grid(row=2, column=0, sticky='e')
        cancelButton.grid(row=2, column=1, sticky='w')
        name_entry.bind('<Return>', lambda x: user_create())
        pswd_entry.bind('<Return>', lambda x: user_create())

        popup.mainloop()

    def create_new_user(user, passwrd):
        global owd
        lwd = owd + '/userdata/'
        idx = len(LoginPage.user_dict)

        new_dict = {}
        new_dict['username'] = user
        new_dict['password'] = passwrd
        LoginPage.user_dict[idx] = new_dict

        open(lwd + '/users.txt', 'w').close()

        with open(lwd + '/users.txt', 'w') as f:
            f.write(str(LoginPage.user_dict))

        # Creating new folders:
        direc = lwd + user + '/memex_entries/'
        direc2 = lwd + user + '/projects/'
        os.makedirs(direc)
        os.makedirs(direc2)

        # Populate user dict with contents of users.txt:
        with open(lwd + '/users.txt', 'r') as f:
            provisional_contents = ''
            size_to_read = 10
            f_contents = f.read(size_to_read)
            while len(f_contents) > 0:
                provisional_contents = provisional_contents + f_contents
                f_contents = f.read(size_to_read)
            LoginPage.user_dict = literal_eval(provisional_contents)

    def duplicate_user(self):
        popup = tk.Tk()

        sel = self.user_list.get(self.user_list.curselection())

        global owd
        sel_mem_entr_dir = owd + '/userdata/' + sel + '/memex_entries/'
        sel_us_data_dir = owd + '/userdata/' + sel + '/'
        sel_pro_entr_dir = owd + '/userdata/' + sel + '/projects/'

        interdic_dir = owd + '/userdata/' + sel + '/memex_entries'
        interdic_dir2 = owd + '/userdata/' + sel + '/projects'

        def user_duplicate(self):
            cwd = owd + '/userdata'
            idx = len(LoginPage.user_dict)
            uname = nameEntry.get()
            pswrd = pswdEntry.get()
            validname = True
            can_create = False
            i = 0
            while i < idx:
                name_check_dict = LoginPage.user_dict[i]
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
                LoginPage.user_dict[idx] = newdict

                open(cwd + '/users.txt', 'w').close()

                with open(cwd + '/users.txt', 'w') as f:
                    f.write(str(LoginPage.user_dict))

                direc = cwd + '/' + uname + '/memex_entries/'
                direc2 = cwd + '/' + uname + '/projects/'
                os.makedirs(direc)
                os.makedirs(direc2)
                LoginPage.populate_user_list(self)
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
                                   command=lambda: user_duplicate(self))
        cancelButton = ttk.Button(popup, text="Cancel", command=leavemini)
        confirmButton.grid(row=3, column=0, sticky='e')
        cancelButton.grid(row=3, column=1, sticky='w')
        nameEntry.bind('<Return>', lambda x: user_duplicate(self))
        pswdEntry.bind('<Return>', lambda x: user_duplicate(self))

        popup.mainloop()

    def delete_user(self):

        sel = self.user_list.get(self.user_list.curselection())

        popup = tk.Tk()

        def delete_confirm():
            if sel != 'ExampleSession':
                to_delete = 0
                dict_len = len(LoginPage.user_dict)
                i = 0
                while i < dict_len:
                    check_ses = LoginPage.user_dict[i]
                    usrname = check_ses['username']
                    if usrname == sel:
                        to_delete = i
                        break
                    else:
                        pass
                    i += 1
                del LoginPage.user_dict[to_delete]

                # Rewrite dictionary
                new_dict = {}
                new_key = 0

                for key, value in LoginPage.user_dict.items():
                    new_dict[new_key] = value
                    new_key += 1

                LoginPage.user_dict.clear()
                LoginPage.user_dict = new_dict

                # Rewrite dictionary file
                owd = os.getcwd()
                cwd = owd + '/userdata'

                open(cwd + '/users.txt', 'w').close()

                with open(cwd + '/users.txt', 'w') as f:
                    f.write(str(LoginPage.user_dict))

                # Delete files:
                os.chdir(cwd)
                dir_to_delete = sel + '/memex_entries/'
                dir_to_delete2 = sel + '/'
                dir_to_delete3 = sel + '/projects/'
                shutil.rmtree(dir_to_delete)
                shutil.rmtree(dir_to_delete3)
                shutil.rmtree(dir_to_delete2)

                LoginPage.populate_user_list(self)
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

    def confirm_login(self):
        usern = self.user_entry.get()
        passw = self.password_entry.get()
        user_exists = False
        list_len = len(LoginPage.user_dict)
        i = 0
        session = {}
        session_idx = 0
        while i < list_len:
            test_session = LoginPage.user_dict[i]
            test_session = test_session['username']
            if test_session == usern:
                user_exists = True
                session_idx = i
                break
            else:
                user_exists = False
            i += 1
        if user_exists:
            session = LoginPage.user_dict[session_idx]
            if passw == session['password']:

                # Login:
                global user
                user = usern
                self.destroy()
                create_home_window()
                # ******

            else:
                self.user_entry.delete(0, tk.END)
                self.password_entry.delete(0, tk.END)
        else:
            self.user_entry.delete(0, tk.END)
            self.password_entry.delete(0, tk.END)

    def populate_user_list(self):
        list_len = len(LoginPage.user_dict)
        i = 0

        self.user_list.delete(0, tk.END)

        while i < list_len:
            list = LoginPage.user_dict[i]
            name = list['username']
            self.user_list.insert(i, name)
            i += 1

        self.user_list.select_set(0)

    def set_username(self):
        sel = self.user_list.get(self.user_list.curselection())
        self.user_entry.delete(0, tk.END)
        self.password_entry.delete(0, tk.END)
        self.user_entry.insert(0, sel)

    def create_window(self):
        LoginPage.start_up()

        self = tk.Tk()
        self.wm_title('Session Login')

        base_frame = tk.Frame(self)
        base_frame.pack(side='top', fill='both', expand=True)
        entry_frame = tk.Frame(base_frame)
        entry_frame.grid(row=0, column=0, sticky="n")
        list_frame = tk.Frame(base_frame)
        list_frame.grid(row=0, column=1, rowspan=2, sticky='nes')
        low_buttons_frame = tk.Frame(base_frame)
        low_buttons_frame.grid(row=1, column=0, sticky="sw")

        user_label = tk.Label(entry_frame, text='Username:', font=normal_font)
        user_label.grid(row=0, column=0, sticky='e')
        password_label = tk.Label(entry_frame, text='Password:', font=normal_font)
        password_label.grid(row=1, column=0, sticky='e')

        self.user_entry = ttk.Entry(entry_frame, font=normal_font)
        self.user_entry.grid(row=0, column=1, sticky='e')
        self.password_entry = ttk.Entry(entry_frame, font=normal_font, show="*")
        self.password_entry.grid(row=1, column=1, sticky='e')

        self.user_entry.bind('<Return>', lambda x: LoginPage.confirm_login(self))
        self.password_entry.bind('<Return>', lambda x: LoginPage.confirm_login(self))

        login_button = ttk.Button(low_buttons_frame, text='Login',
                                  command=lambda: LoginPage.confirm_login(self))
        login_button.grid(row=0, column=0, sticky='w')
        quit_button = ttk.Button(low_buttons_frame, text='Quit', command=quit)
        quit_button.grid(row=0, column=1, sticky='w')

        new_user_button = ttk.Button(list_frame, text='New', width=3,
                                     command=lambda: LoginPage.new_user_popup(self))
        new_user_button.grid(row=0, column=0)
        dup_user_button = ttk.Button(list_frame, text='x2', width=3,
                                     command=lambda: LoginPage.duplicate_user(self))
        dup_user_button.grid(row=0, column=1)
        del_user_button = ttk.Button(list_frame, text='Del', width=3,
                                     command=lambda: LoginPage.delete_user(self))
        del_user_button.grid(row=0, column=2)

        self.user_list = tk.Listbox(list_frame, font=normal_font)
        self.user_list.config(width=23)
        self.user_list.grid(row=1, column=0, columnspan=5)

        LoginPage.populate_user_list(self)
        self.user_list.bind('<Double-Button-1>', lambda x: LoginPage.set_username(self))

        self.mainloop()

    def __init__(self, *args, **kwargs):
        pass


class HomePage():

    global owd
    global user
    uwd = owd
    pwd = owd
    mwd = owd
    mouse_hover = ''
    current_graph_file = 'blank_project.txt'
    current_graph_dict = {'from': [], 'to': []}
    f = Figure()
    a = f.add_subplot(111)
    G = nx.Graph()

    def start_up(self):
        HomePage.pwd = owd + '/userdata/' + user + '/projects/'
        HomePage.mwd = owd + '/userdata/' + user + '/memex_entries/'
        HomePage.uwd = owd + '/userdata/' + user + '/'

        blank_proj_file = HomePage.pwd + 'blank_project.txt'

        open(blank_proj_file, 'w').close()
        with open(blank_proj_file, 'w') as f:
            f.write("{'from': [], 'to': []}")

    def graph_update():
        """
        # pull_data = open(HomePage.pwd + HomePage.current_graph_file, 'r').read()
        pull_data = open(HomePage.pwd + 'test.txt', 'r').read()
        graph_dict = literal_eval(pull_data)
        df = pd.DataFrame(graph_dict)
        HomePage.G = nx.from_pandas_edgelist(df, 'from', 'to')

        HomePage.a.clear()

        nx.draw(HomePage.G, ax=HomePage.a, with_labels=True)
        """

        HomePage.a.clear()

        nx.draw(HomePage.G, ax=HomePage.a, with_labels=True)

        print('updated')

    def mouse_hover_change(self, item):
        HomePage.mouse_hover = item
        HomePage.status_update(self)

    def status_update(self):
        global user

        stat_txt = "Logged in as: " + user
        status_label = tk.Label(self.status_frame, text=stat_txt)
        status_label.grid(row=0, column=0, sticky='w')

        self.mouse_hover_label.destroy()

        if HomePage.mouse_hover != '':
            self.mouse_hover_label = tk.Label(self.status_frame, text=HomePage.mouse_hover)
            self.mouse_hover_label.grid(row=0, column=1, sticky='e')

    def return_to_login(self):
        global user
        HomePage.mouse_hover = ''
        user = ''
        self.destroy()
        LoginPage.create_window(login_window)

    def new_node_popup(self):

        def leavemini():
            popup.destroy()

        def node_create():
            name = name_entry.get()
            HomePage.G.add_node(name)
            HomePage.graph_update()
            leavemini()

        popup = tk.Tk()
        popup.wm_title("New Node")

        name_label = tk.Label(popup, text='Name: ', font=normal_font)
        name_label.grid(row=0, column=0, sticky='w')

        name_entry = ttk.Entry(popup, font=normal_font)
        name_entry.grid(row=0, column=1, sticky='e')

        confirmButton = ttk.Button(popup, text="OK", command=node_create)
        cancelButton = ttk.Button(popup, text="Cancel", command=leavemini)
        confirmButton.grid(row=2, column=0, sticky='e')
        cancelButton.grid(row=2, column=1, sticky='w')
        name_entry.bind('<Return>', lambda x: node_create())

        popup.mainloop()

    def create_window(self):
        self = tk.Tk()
        self.wm_title('Instrument Cartographer')

        self.base_frame = tk.Frame(self)
        self.base_frame.pack(side='top', fill='both', expand=True)

        graph_win_frame = tk.Frame(self.base_frame)
        graph_win_frame.grid(row=0, column=0)
        memex_win_frame = tk.Frame(self.base_frame)
        memex_win_frame.grid(row=0, column=1)
        self.status_frame = tk.Frame(self.base_frame)
        self.status_frame.config(borderwidth=1, relief='groove')
        self.status_frame.grid(row=1, column=0, columnspan=2)

        self.mouse_hover_label = tk.Label(self.status_frame, text=HomePage.mouse_hover)
        self.mouse_hover_label.grid(row=0, column=1, sticky='e')

        graph_tool_frame = tk.Frame(graph_win_frame)
        graph_tool_frame.grid(row=0, column=0)
        self.graph_canv_frame = tk.Frame(graph_win_frame)
        self.graph_canv_frame.grid(row=1, column=0)

        memex_edit_frame = tk.Frame(memex_win_frame)
        memex_edit_frame.grid(row=0, column=0)
        memex_info_frame = tk.Frame(memex_win_frame)
        memex_info_frame.grid(row=1, column=0)
        memex_tool_frame = tk.Frame(memex_edit_frame)
        memex_tool_frame.grid(row=0, column=0)
        memex_list_frame = tk.Frame(memex_edit_frame)
        memex_list_frame.grid(row=1, column=0)

        canvas = FigureCanvasTkAgg(HomePage.f, self.graph_canv_frame)
        canvas.draw()
        canvas.get_tk_widget().pack(side=tk.TOP, fill=tk.BOTH, expand=True)

        # Graph toolbar buttons:
        g_tool_new_node = ttk.Button(graph_tool_frame, text='Nn',
                                     command=lambda: HomePage.new_node_popup(self))
        g_tool_new_node.grid(row=0, column=0)
        g_tool_new_node.bind(
            '<Enter>', lambda x: HomePage.mouse_hover_change(self, 'New Node'))
        g_tool_new_node.bind(
            '<Leave>', lambda x: HomePage.mouse_hover_change(self, ''))

        g_tool_new_node = ttk.Button(graph_tool_frame, text='Ne')
        g_tool_new_node.grid(row=0, column=1)
        g_tool_new_node.bind(
            '<Enter>', lambda x: HomePage.mouse_hover_change(self, 'New Edge'))
        g_tool_new_node.bind(
            '<Leave>', lambda x: HomePage.mouse_hover_change(self, ''))

        # Memex toolbar buttons:
        m_toolbar_new = ttk.Button(memex_tool_frame, text='New')
        m_toolbar_dup = ttk.Button(memex_tool_frame, text='x2')
        m_toolbar_del = ttk.Button(memex_tool_frame, text='Del')
        m_toolbar_dis = ttk.Button(memex_tool_frame, text='Dis')
        m_toolbar_fil = ttk.Button(memex_tool_frame, text='Fil')
        m_toolbar_new.grid(row=0, column=0)
        m_toolbar_dup.grid(row=0, column=1)
        m_toolbar_del.grid(row=0, column=2)
        m_toolbar_dis.grid(row=0, column=3)
        m_toolbar_fil.grid(row=0, column=4)

        m_toolbar_new.bind(
            '<Enter>', lambda x: HomePage.mouse_hover_change(self, 'New Memex Entry'))
        m_toolbar_new.bind(
            '<Leave>', lambda x: HomePage.mouse_hover_change(self, ''))
        m_toolbar_dup.bind(
            '<Enter>', lambda x: HomePage.mouse_hover_change(self, 'Duplicate Memex Entry'))
        m_toolbar_dup.bind(
            '<Leave>', lambda x: HomePage.mouse_hover_change(self, ''))
        m_toolbar_del.bind(
            '<Enter>', lambda x: HomePage.mouse_hover_change(self, 'Delete Memex Entry'))
        m_toolbar_del.bind(
            '<Leave>', lambda x: HomePage.mouse_hover_change(self, ''))
        m_toolbar_dis.bind(
            '<Enter>', lambda x: HomePage.mouse_hover_change(self, 'Projects to Display'))
        m_toolbar_dis.bind(
            '<Leave>', lambda x: HomePage.mouse_hover_change(self, ''))
        m_toolbar_fil.bind(
            '<Enter>', lambda x: HomePage.mouse_hover_change(self, 'Filter & Search'))
        m_toolbar_fil.bind(
            '<Leave>', lambda x: HomePage.mouse_hover_change(self, ''))

        # Memex Listbox:
        m_listbox = tk.Listbox(memex_list_frame)
        m_listbox.grid(row=0, column=0)

        HomePage.status_update(self)
        HomePage.graph_update()

        # back_button = ttk.Button(graph_tool_frame, text='Back',
        #                          command=lambda: HomePage.return_to_login(self))
        # back_button.pack()

        self.mainloop()

    def __init__(self, *args, **kwargs):
        HomePage.start_up(self)


login_window = LoginPage()
LoginPage.create_window(login_window)
