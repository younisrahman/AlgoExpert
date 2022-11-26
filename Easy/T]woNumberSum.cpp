#include <bits/stdc++.h>
#define ll long long int
#define FastIO                        \
    ios_base::sync_with_stdio(false); \
    cin.tie(0);                       \
    cout.tie(0);
using namespace std;
vector<int> twoNumberSum(vector<int> array, int targetSum)
{
    unordered_map<int, bool> hashMap;
    vector<int> ans;
    for (int i = 0; i < array.size(); i++)
    {
        int val = targetSum - array[i];
        if (hashMap.find(val) == hashMap.end())
        {
            hashMap.insert({array[i], true});
        }
        else
        {
            return {val, array[i]};
        }
    }
    // Write your code here.
    return {};
}
int main()
{
    FastIO;
    vector<int> v = {3, 5, -4, 8, 11, 1, -1, 6};

    vector<int> vec = twoNumberSum(v, 10);
    for (int i = 0; i < vec.size(); i++)
    {
        std::cout << vec[i] << " " << std::endl;
    }
    std::cout << std::endl;

    return 0;
}