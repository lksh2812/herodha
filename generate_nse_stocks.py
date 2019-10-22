from nsetools import Nse
nse = Nse()
import os
import csv

# create csv file for all nse stocks
def update_stocks():
    file = os.getcwd()
    all_stock_codes = nse.get_stock_codes()
    
    csv_data = []
    for code in all_stock_codes:
        csv_data.append([code, all_stock_codes[code]])
    
    with open(os.path.join(file,'all_stocks_code.csv'), 'w') as f:
        writer = csv.writer(f)
        writer.writerows(csv_data)
    f.close()
    return True


if __name__ == "__main__":
   status = update_stocks()

