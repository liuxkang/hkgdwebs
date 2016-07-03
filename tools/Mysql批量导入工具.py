import xlrd
import mysql.connector as connector

def save_to_db(excel_sheet):
    db_config={
        'user':'liukang',
        'password':'rro7lnu2cx',
        'host':'localhost',
        'database':'hkgddb',
    }
    conn = connector.connect(**db_config)
    for row in excel_sheet.get_rows():
        sql_str = 'insert into '+excel_sheet.name +' values('
        for row_value in row:
            sql_str += "\'"+str(row_value.value)+"\',"
        sql_str = sql_str[0:len(sql_str)-1]+');'
        cur = conn.cursor()
        try:
            print(sql_str)
            cur.execute(sql_str)
            print("导入数据成功！")
        except:
            print("导入数据库有误！")
    conn.commit()
    conn.close()

my_book = xlrd.open_workbook("数据库导入模板.xlsx")
my_sheets = my_book.sheets()

for sheet in my_sheets:
    save_to_db(sheet)
    
