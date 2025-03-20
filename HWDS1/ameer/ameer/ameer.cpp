#include <iostream>
#include <queue>
#include <vector>
#include <cmath>
#include <algorithm>

using namespace std;

struct Node {
    int x, y;
    double f, g, h;
    Node* parent;

    Node(int x, int y, double g, double h, Node* parent = nullptr)
        : x(x), y(y), g(g), h(h), f(g + h), parent(parent) {}

    bool operator>(const Node& other) const {
        return f > other.f;
    }
};

double manhattanDistance(int x1, int y1, int x2, int y2) {
    return abs(x1 - x2) + abs(y1 - y2);
}

double euclideanDistance(int x1, int y1, int x2, int y2) {
    return sqrt(pow(x1 - x2, 2) + pow(y1 - y2, 2));
}

vector<pair<int, int>> aStar(vector<vector<int>>& grid, pair<int, int> start, pair<int, int> goal, bool useGraphSearch, bool useEuclidean) {
    int rows = grid.size(), cols = grid[0].size();
    auto heuristic = useEuclidean ? euclideanDistance : manhattanDistance;

    priority_queue<Node, vector<Node>, greater<Node>> openList;
    vector<vector<bool>> visited(rows, vector<bool>(cols, false));

    openList.emplace(start.first, start.second, 0, heuristic(start.first, start.second, goal.first, goal.second));

    vector<pair<int, int>> directions = { {0, 1}, {0, -1}, {1, 0}, {-1, 0} };

    while (!openList.empty()) {
        Node current = openList.top();
        openList.pop();

        if (useGraphSearch && visited[current.x][current.y]) continue;
        visited[current.x][current.y] = true;

        if (current.x == goal.first && current.y == goal.second) {
            vector<pair<int, int>> path;
            Node* pathNode = &current;
            while (pathNode) {
                path.emplace_back(pathNode->x, pathNode->y);
                pathNode = pathNode->parent;
            }
            reverse(path.begin(), path.end());
            return path;
        }

        for (auto& dir : directions) {
            int nx = current.x + dir.first, ny = current.y + dir.second;
            if (nx < 0 || ny < 0 || nx >= rows || ny >= cols || grid[nx][ny] == 1 || (useGraphSearch && visited[nx][ny])) continue;

            openList.emplace(nx, ny, current.g + 1, heuristic(nx, ny, goal.first, goal.second), new Node(current));
        }

    }
    return {};
}

int main() {
    vector<vector<int>> grid = {
    {0, 0, 0, 1, 0, 0, 0},
    {1, 1, 0, 1, 0, 1, 0},
    {0, 0, 0, 0, 0, 1, 0},
    {0, 1, 1, 1, 0, 1, 0},
    {0, 0, 0, 1, 0, 0, 0},
    {1, 1, 0, 1, 1, 1, 0},
    {0, 0, 0, 0, 0, 0, 0}
    };


    pair<int, int> start = { 0, 0 }, goal = { 6, 6 };
    vector<pair<int, int>> path;

    vector<pair<string, bool>> heuristics = { {"Manhattan", false}, {"Euclidean", true} };
    vector<pair<string, bool>> searchTypes = { {"Graph Search", true}, {"Tree Search", false} };

    for (auto& heuristic : heuristics) {
        for (auto& search : searchTypes) {
            cout << "\n Path using " << heuristic.first << " & " << search.first << ":\n";
            path = aStar(grid, start, goal, search.second, heuristic.second);
            if (path.empty()) {
                cout << "No path found!\n";
            }
            else {
                for (auto& p : path) cout << "(" << p.first << ", " << p.second << ") -> ";
                cout << "Goal\n";
            }
        }
    }

    return 0;
}