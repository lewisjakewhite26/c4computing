from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas


OUT_PATH = r"c:\Users\DRMLWhite\Downloads\oracle_of_olympus_printables\printables\01_starting_cards.pdf"

CARDS = [
    ("TEAM APOLLO", "Equipment Shed", "7392"),
    ("TEAM HERMES", "Gazebo", "5814"),
    ("TEAM ATHENA", "Table Tennis Table", "9260"),
    ("TEAM ARES", "Football Goal", "3048"),
    ("TEAM ZEUS", "Storytelling Chair", "1675"),
]


def draw_card(c, x, y, w, h, team, location, code):
    c.setStrokeColor(HexColor("#1e3a5f"))
    c.setLineWidth(1.4)
    c.roundRect(x, y, w, h, 6 * mm, stroke=1, fill=0)

    text_x = x + 7 * mm
    top = y + h - 8 * mm

    c.setFont("Helvetica-Bold", 13)
    c.drawString(text_x, top, "THE ORACLE OF OLYMPUS")

    c.setFont("Helvetica-Bold", 11)
    c.drawString(text_x, top - 8 * mm, team)

    c.setFont("Helvetica-Bold", 9.5)
    c.drawString(text_x, top - 17 * mm, "YOUR STARTING LOCATION")
    c.setFont("Helvetica", 11)
    c.drawString(text_x, top - 23 * mm, location)

    c.setFont("Helvetica-Bold", 9.5)
    c.drawString(text_x, top - 33 * mm, "YOUR FIRST PASSCODE")

    c.setFillColor(HexColor("#0f1419"))
    c.setFont("Helvetica-Bold", 22)
    c.drawString(text_x, top - 43 * mm, code)
    c.setFillColor(HexColor("#000000"))

    c.setFont("Helvetica", 8.5)
    c.drawString(
        text_x,
        y + 6 * mm,
        "Find the code at your location - Each answer unlocks the next clue",
    )


def main():
    c = canvas.Canvas(OUT_PATH, pagesize=A4)
    page_w, page_h = A4

    margin_x = 15 * mm
    margin_y = 14 * mm
    gap_y = 8 * mm
    card_w = page_w - 2 * margin_x
    card_h = (page_h - 2 * margin_y - 3 * gap_y) / 4

    # Page 1: four cards
    y = page_h - margin_y - card_h
    for i in range(4):
        team, loc, code = CARDS[i]
        draw_card(c, margin_x, y, card_w, card_h, team, loc, code)
        y -= card_h + gap_y
    c.setFont("Helvetica-Oblique", 8)
    c.drawRightString(page_w - margin_x, 8 * mm, "Print on card stock if possible - Cut along card edges")
    c.showPage()

    # Page 2: final card
    y = page_h - margin_y - card_h
    team, loc, code = CARDS[4]
    draw_card(c, margin_x, y, card_w, card_h, team, loc, code)
    c.setFont("Helvetica-Oblique", 8)
    c.drawRightString(page_w - margin_x, 8 * mm, "Print on card stock if possible - Cut along card edges")

    c.save()


if __name__ == "__main__":
    main()
