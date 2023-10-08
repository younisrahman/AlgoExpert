def hasSingleCycle(array):
    numElementsVisited = 0
    currentIdx = 0
    while numElementsVisited < len(array):
        if numElementsVisited > 0 and currentIdx == 0:
            return False
        numElementsVisited += 1
        currentIdx = getNextIdx(currentIdx, array)

    return currentIdx == 0


def getNextIdx(currentIdx, array):
    jump = array[currentIdx]
    nexIdx = (currentIdx + jump) % len(array)
    return nexIdx if nexIdx >= 0 else nexIdx + len(array)
