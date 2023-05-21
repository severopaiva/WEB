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

# calculando a �rea e a circunfer�ncia do c�rculo1
print("�rea:", circulo1.area())
print("Circunfer�ncia:", circulo1.circunferencia())

# criando outro objeto da classe Circulo com raio = 10
circulo2 = Circulo(10)

# calculando a �rea e a circunfer�ncia do c�rculo2
print("�rea:", circulo2.area())
print("Circunfer�ncia:", circulo2.circunferencia())
