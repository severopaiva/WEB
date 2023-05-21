import math

class Circulo:
    def __init__(self, raio):
        self.raio = raio

    def area(self):
        return math.pi * self.raio ** 2

    def circunferencia(self):
        return 2 * math.pi * self.raio

# criando um objeto da classe Circulo com raio = 5
circulo1 = Circulo(5)

# calculando a área e a circunferência do círculo1
print("Área:", circulo1.area())
print("Circunferência:", circulo1.circunferencia())

# criando outro objeto da classe Circulo com raio = 10
circulo2 = Circulo(10)

# calculando a área e a circunferência do círculo2
print("Área:", circulo2.area())
print("Circunferência:", circulo2.circunferencia())
