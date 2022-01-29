import pandas as pd
import numpy as np
import networkx as nx
import matplotlib
import tkinter as tk
from tkinter import ttk
from matplotlib import style
# import matplotlib.animation as animation
from matplotlib.figure import Figure
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg
from matplotlib.backends.backend_tkagg import NavigationToolbar2Tk
matplotlib.use('TkAgg')


large_font = ('Verdana', 12)
normal_font = ('Verdana', 10)
small_font = ('Verdana', 8)
style.use('ggplot')

f = Figure()
a = f.add_subplot(111)
G = nx.Graph()


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


class InsCarWin(tk.Tk):

    def __init__(self, *args, **kwargs):
        tk.Tk.__init__(self, *args, **kwargs)

        tk.Tk.wm_title(self, "Instrument Cartographer")

        container = tk.Frame(self)
        container.pack(side='top', fill='both', expand=True)
        container.grid_rowconfigure(0, weight=1)
        container.grid_columnconfigure(0, weight=1)

        menubar = tk.Menu(container)
        filemenu = tk.Menu(menubar, tearoff=0)
        filemenu.add_command(label="Save settings",
                             command=lambda: popupmsg("Not yet supported!"))
        filemenu.add_separator()
        filemenu.add_command(label="Exit", command=quit)
        menubar.add_cascade(label="File", menu=filemenu)
        tk.Tk.config(self, menu=menubar)

        self.frames = {}

        # All page names are to be added here for navigation:
        for F in (HomePage, OtherPage):

            frame = F(container, self)

            self.frames[F] = frame

            frame.grid(row=0, column=0, sticky="nsew")

        self.show_frame(HomePage)

    def show_frame(self, cont):
        frame = self.frames[cont]
        frame.tkraise()


class HomePage(tk.Frame):

    def __init__(self, parent, controller):
        tk.Frame.__init__(self, parent)
        label = tk.Label(self, text='Home Page', font=large_font)
        label.pack(padx=10, pady=10)

        canvas = FigureCanvasTkAgg(f, self)
        canvas.draw()
        canvas.get_tk_widget().pack(side=tk.TOP, fill=tk.BOTH, expand=True)

        toolbar = NavigationToolbar2Tk(canvas, self)
        toolbar.update()
        canvas._tkcanvas.pack(side=tk.TOP, fill=tk.BOTH, expand=True)


class OtherPage(tk.Frame):

    def __init__(self, parent, controller):
        tk.Frame.__init__(self, parent)
        button1 = ttk.Button(self, text='Back to Home',
                             command=lambda: controller.show_frame(HomePage))
        button1.pack()


app = InsCarWin()
app.geometry("1280x720")
updateGraph()
app.mainloop()
