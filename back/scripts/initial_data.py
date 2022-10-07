import sys

sys.path.insert(0, "")
from datetime import date
from src.domain.barcode import BarCode, BarCodeRepository


def main():

    database_path = "data/database.db"

    barcode_repository = BarCodeRepository(database_path)

    # first_palot = BarCode(lote_number="K2100017001", project="L.CALIBRADO", date="")
    # barcode_repository.save_palot(first_palot)


if __name__ == "__main__":
    main()
