num1 = int(7)

num2 = int(15)

num3 = int(2)


smallest_value = [num1, num2, num3]

if num1 > num2 and num2 > num3: 
    smallest_value = num1
    
elif num1 > num3 and num2 > num3:
    smallest_value = num3

elif num2 < num1 and num3 < num1:
    smallest_value = num2

print(smallest_value)
