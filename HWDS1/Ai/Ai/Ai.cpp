#include <iostream>
#include <vector>
#include <queue>
#include <cmath>
#include <unordered_map>
#include <algorithm>
using namespace std;

struct Node {
    int x, y;
    double f, g, h;
    Node* parent;

    Node(int x, int y, double g, double h, Node* parent = nullptr)
        : x(x), y(y), g(g), h(h), f(g + h), parent(parent) {
    }

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
    unordered_map<int, Node*> allNodes;
    unordered_map<int, double> gScore;

    int startKey = start.first * cols + start.second;
    Node* startNode = new Node(start.first, start.second, 0, heuristic(start.first, start.second, goal.first, goal.second));
    openList.push(*startNode);
    allNodes[startKey] = startNode;
    gScore[startKey] = 0;
    unordered_map<int, bool> visited;

    vector<pair<int, int>> directions = { {0, 1}, {0, -1}, {1, 0}, {-1, 0} };

    while (!openList.empty()) {
        Node current = openList.top();
        openList.pop();
        int currKey = current.x * cols + current.y;

        if (useGraphSearch && visited[currKey]) continue;
        visited[currKey] = true;

        if (current.x == goal.first && current.y == goal.second) {
            vector<pair<int, int>> path;
            Node* pathNode = &current;
            while (pathNode) {
                path.push_back({ pathNode->x, pathNode->y });
                pathNode = pathNode->parent;
            }
            reverse(path.begin(), path.end());
            return path;
        }

        for (auto& dir : directions) {
            int nx = current.x + dir.first, ny = current.y + dir.second;
            if (nx < 0 || ny < 0 || nx >= rows || ny >= cols || grid[nx][ny] == 1) continue;
            int neighborKey = nx * cols + ny;
            if (useGraphSearch && visited[neighborKey]) continue;

            double newG = current.g + 1;
            if (gScore.find(neighborKey) == gScore.end() || newG < gScore[neighborKey]) {
                Node* neighborNode = new Node(nx, ny, newG, heuristic(nx, ny, goal.first, goal.second), allNodes[currKey]);
                openList.push(*neighborNode);
                allNodes[neighborKey] = neighborNode;
                gScore[neighborKey] = newG;
            }
        }
    }
    return {};
}

int main() {
    vector<vector<int>> grid = {
        {0, 0, 0, 0, 1},
        {1, 1, 0, 1, 0},
        {0, 0, 0, 0, 0},
        {0, 1, 1, 1, 0},
        {0, 0, 0, 0, 0}
    };
    pair<int, int> start = { 0, 0 }, goal = { 4, 4 };

    vector<pair<int, int>> path;

    cout << "Path using Manhattan Distance and Graph Search:" << endl;
    path = aStar(grid, start, goal, true, false);
    for (auto& p : path) cout << "(" << p.first << ", " << p.second << ") -> ";
    cout << "Goal\n";

    cout << "Path using Euclidean Distance and Graph Search:" << endl;
    path = aStar(grid, start, goal, true, true);
    for (auto& p : path) cout << "(" << p.first << ", " << p.second << ") -> ";
    cout << "Goal\n";

    cout << "Path using Manhattan Distance and Tree Search:" << endl;
    path = aStar(grid, start, goal, false, false);
    for (auto& p : path) cout << "(" << p.first << ", " << p.second << ") -> ";
    cout << "Goal\n";

    cout << "Path using Euclidean Distance and Tree Search:" << endl;
    path = aStar(grid, start, goal, false, true);
    for (auto& p : path) cout << "(" << p.first << ", " << p.second << ") -> ";
    cout << "Goal\n";

    return 0;
}
