from nsetools import Nse
nse = Nse()
import os
from elasticsearch import Elasticsearch
ELASTICSEARCH_URL = os.getenv('ELASTICSEARCH_URL')
es = Elasticsearch(ELASTICSEARCH_URL)

# update elasticsearch database with all currently present stocks in NSE
def update_stocks():
    all_stock_codes = nse.get_stock_codes()
    i = 0
    for code in all_stock_codes:
        #to ignore 'SYMBOL':'COMMPANY NAME'
        if i>0:
            es.index(index='stocks',doc_type='stocks', id=i, \
                body={'symbol': code, 'name':all_stock_codes[code]})
        i+=1
    return True


if __name__ == "__main__":
   status = update_stocks()

