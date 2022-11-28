#include <bits/stdc++.h>
#define ll long long int
#define FastIO                        \
    ios_base::sync_with_stdio(false); \
    cin.tie(0);                       \
    cout.tie(0);
using namespace std;
bool isValidSubsequence(vector<int> array, vector<int> sequence)
{
    // Write your code here.
    int subInt = 0;
    for (int i = 0; i < array.size(); i++)
    {
        if (sequence[subInt] == array[i])
        {
            subInt++;
        }
        if (subInt >= sequence.size())
        {
            return true;
        }
    }
    return false;
}

int main()
{
    FastIO;
    vector<int> arr = {5, 1, 22, 25, 6, -1, 8, 10};
    vector<int> subSequence = {1, 6, 8, -1};
    std::cout << isValidSubsequence(arr, subSequence) << std::endl;
    return 0;
}