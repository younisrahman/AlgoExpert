# def caesarCipherEncryptor(string, key):
#     newLetter = []
#     newKey = key % 26
#     for letter in string:
#         newLetter.append(getNewLetter(letter, newKey))
#     return "".join(newLetter)


# def getNewLetter(letter, key):
#     newletterCode = ord(letter) + key
#     return chr(newletterCode) if newletterCode <= 122 else chr(96 + newletterCode % 122)


def caesarCipherEncryptor(string, key):
    newLetter = []
    newKey = key % 26
    alphabets = list('abcdefghijklmnopqrstuvwxyz')
    for letter in string:
        newLetter.append(getNewLetter(letter, newKey, alphabets))
    return "".join(newLetter)


# def getNewLetter(letter, key, alphabets):
#     newletterCode = (alphabets.index(letter) + key)
#     return alphabets[newletterCode] if newletterCode <= 25 else alphabets[-1 + (newletterCode % 25)]

def getNewLetter(letter, key, alphabets):
    newletterCode = alphabets.index(letter) - key
    return alphabets[newletterCode] if newletterCode >= 0 else alphabets[-1 + (newletterCode % 25)]


print(caesarCipherEncryptor('xyz', 25))
