#include <bits/stdc++.h>
#define ll long long int
#define FastIO                        \
    ios_base::sync_with_stdio(false); \
    cin.tie(0);                       \
    cout.tie(0);
using namespace std;
vector<int> sortedSquaredArray(vector<int> array)
{
    // Write your code here
    int size = array.size() - 1;
    vector<int> ans(size + 1);
    int first = 0;
    int last = size;
    while (last >= first)
    {
        if (abs(array[first]) > abs(array[last]))
        {
            ans[size] = abs(array[first]) * abs(array[first]);
            first++;
            size--;
        }
        else
        {
            ans[size] = abs(array[last]) * abs(array[last]);
            last--;
            size--;
        }
    }

    return ans;
}
int main()
{
    FastIO;
    vector<int> vec = {-7, -5, -4, 3, 6, 8, 9};
    vector<int> ans = sortedSquaredArray(vec);
    for (int i = 0; i < ans.size(); i++)
    {
        std::cout << ans[i] << std::endl;
    }

    return 0;
}