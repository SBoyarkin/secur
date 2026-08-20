from docxtpl import DocxTemplate
from datetime import datetime

class DocumentGenerator:
    def __init__(self, template, var):
        self.template = template
        self.var = var

    def __get_url(self):
        return('test')

    def generate(self):
        doc = DocxTemplate(self.template)
        doc.render(self.var[0])
        doc.save(f"{datetime.now()}.docx")