#include <bits/stdc++.h>
#define ll long long int
#define FastIO                        \
    ios_base::sync_with_stdio(false); \
    cin.tie(0);                       \
    cout.tie(0);
using namespace std;
int nonConstructibleChange(vector<int> coins)
{
    // Write your code here.
    sort(coins.begin(), coins.end());
    int change = 0;
    for (int i = 0; i < coins.size(); i++)
    {
        if (change + 1 < coins[i])
        {
            return change + 1;
        }
        change += coins[i];
    }
    return change + 1;
}

int main()
{
    FastIO;
    vector<int> vec = {5, 7, 1, 1, 2, 3, 22};
    std::cout << nonConstructibleChange(vec) << std::endl;
    return 0;
}