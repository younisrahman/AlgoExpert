def collidingAsteroids(asteroids):
    resultStack = []
    for astroid in asteroids:
        if astroid > 0:
            resultStack.append(astroid)
            continue

        while True:
            if len(resultStack) == 0 or resultStack[-1] < 0:
                resultStack.append(astroid)
                break
            astroidSize = abs(astroid)
            if resultStack[-1] > astroidSize:
                break
            if resultStack[-1] == astroidSize:
                resultStack.pop()
                break
            resultStack.pop()
    return resultStack
