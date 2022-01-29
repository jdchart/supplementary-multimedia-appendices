import sqlite3, os, sys


if len(sys.argv) < 2:
    print('You need to pass the name of a valid SQLite database')
    exit()

database_file = os.path.join(
    os.path.dirname(os.path.realpath(__file__)),
    sys.argv[1]
)

database = sqlite3.connect(database_file)

cursor = database.cursor()

cursor.execute(
    "SELECT * FROM my_data"
)

rows = cursor.fetchall()

for row in rows:
    print(row)

database.close()