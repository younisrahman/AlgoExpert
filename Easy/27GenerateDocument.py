def generateDocument(characters, document):
    # Write your code here.
    characterCounts = {}
    for character in characters:
        if character not in characterCounts:
            characterCounts[character] = 0
        characterCounts[character] += 1

    for character in document:
        if character not in characterCounts or characterCounts[character] == 0:
            return False
        characterCounts[character] -= 1

    return True


print(generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!"))
