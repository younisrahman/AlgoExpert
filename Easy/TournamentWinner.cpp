#include <bits/stdc++.h>
#define ll long long int
#define FastIO                        \
    ios_base::sync_with_stdio(false); \
    cin.tie(0);                       \
    cout.tie(0);
using namespace std;
string tournamentWinner(vector<vector<string>> competitions,
                        vector<int> results)
{
    // Write your code here.
    unordered_map<string, int> winner;
    string ans = "";
    int highest = 0;
    for (int i = 0; i < competitions.size(); i++)
    {
        int result = results[i] == 1 ? 0 : 1;
        winner[competitions[i][result]]++;
        if (winner[competitions[i][result]] > highest)
        {
            ans = competitions[i][result];
            highest = winner[competitions[i][result]];
        }
        }
    return ans;
}

int main()
{

    FastIO;
    vector<vector<string>> competitions = {
        {"HTML", "C#"},
        {"C#", "Python"},
        {"Python", "HTML"},
    };
    vector<int> results = {0, 0, 1};
    std::cout << tournamentWinner(competitions, results) << std::endl;
    return 0;
}