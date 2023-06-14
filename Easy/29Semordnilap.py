def semordnilap(words):
    # Write your code here.
    wordSet = set(words)
    semordnilapPairs = []
    for word in words:
        reverse = word[::-1]
        if reverse in wordSet and word != reverse:
            semordnilapPairs.append([word, reverse])
            wordSet.remove(reverse)
            wordSet.remove(word)

    return semordnilapPairs


print(semordnilap(["dog", "dog", "desserts", "god", "stressed"]))
