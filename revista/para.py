class alm:
    def __init__(self, nombre):
        self.nombre=nombre
        self.alma=[]
    
    def al(self):
        if len(self.alma)>0:
            self.abrir_puerta()
        else:
            print(f"{self.nombre} no tiene almas")
            
    def abrir_puerta(self):
        print(f"{self.nombre} ha habierto el portal")
        self.alma.append("Alma perdida")
        self.al(self.nombre)