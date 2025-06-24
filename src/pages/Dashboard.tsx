
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LogOut } from "lucide-react";

interface Contestant {
  username: string;
  isLoggedIn: boolean;
}

interface ContestantPoints {
  name: string;
  episode1: number;
  episode2: number;
  episode3: number;
  total: number;
}

const Dashboard = () => {
  const [contestant, setContestant] = useState<Contestant | null>(null);
  const navigate = useNavigate();

  // All contestants with their points data
  const [contestantsPoints] = useState<ContestantPoints[]>([
    { name: "Mi phax", episode1: 8.5, episode2: 15, episode3: 0, total: 23.5 },
    { name: "ImmPotatoGD", episode1: 5, episode2: 5, episode3: 0, total: 10 },
    { name: "Crestial", episode1: 7, episode2: -3, episode3: 0, total: 4 },
    { name: "Abso", episode1: 7, episode2: 8, episode3: 0, total: 15 },
    { name: "MeadowDream", episode1: 9.5, episode2: -5, episode3: 0, total: 4.5 },
    { name: "Mitchell", episode1: 4, episode2: 10, episode3: 0, total: 14 },
    { name: "Ryxenol7", episode1: 8, episode2: 13, episode3: 0, total: 21 },
  ]);

  useEffect(() => {
    const contestantData = localStorage.getItem("contestant");
    if (contestantData) {
      const parsed = JSON.parse(contestantData);
      if (parsed.isLoggedIn) {
        setContestant(parsed);
      } else {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("contestant");
    navigate("/login");
  };

  // Contest quests data
  const contestQuests = [
    { 
      episode: "Episode 1", 
      quest: "Create an amazing level", 
      deadline: "2025-01-15", 
      status: "Completed",
      description: "Design and build a creative level that showcases your skills"
    },
    { 
      episode: "Episode 2", 
      quest: "Beat the challenge level", 
      deadline: "2025-01-22", 
      status: "Completed",
      description: "Successfully complete the designated challenge level"
    },
    { 
      episode: "Episode 3", 
      quest: "Decorate a layout", 
      deadline: "2025-01-29", 
      status: "Active",
      description: "Transform a basic layout into a visually stunning design"
    },
  ];

  // Get current user's points
  const currentUserPoints = contestantsPoints.find(c => c.name === contestant?.username);

  if (!contestant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen hero-gradient">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome {contestant.username}!
            </h1>
            <p className="text-gray-300 text-lg">Contest Points Dashboard</p>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Your Points Summary */}
        {currentUserPoints && (
          <Card className="contest-card mb-8">
            <CardHeader>
              <CardTitle className="text-white text-xl">Your Total Points</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-bfcp-pink">{currentUserPoints.total} Points</div>
            </CardContent>
          </Card>
        )}

        {/* All Contestants Points Table */}
        <Card className="contest-card mb-8">
          <CardHeader>
            <CardTitle className="text-white">All Contestants - Points Overview</CardTitle>
            <p className="text-gray-300">View-only points table</p>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-300">Contestant</TableHead>
                  <TableHead className="text-gray-300">Episode 1</TableHead>
                  <TableHead className="text-gray-300">Episode 2</TableHead>
                  <TableHead className="text-gray-300">Episode 3</TableHead>
                  <TableHead className="text-gray-300">Total Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contestantsPoints.map((contestantData) => {
                  const isCurrentUser = contestantData.name === contestant?.username;
                  return (
                    <TableRow key={contestantData.name}>
                      <TableCell className={`font-semibold ${isCurrentUser ? 'text-bfcp-pink' : 'text-white'}`}>
                        {contestantData.name}
                        {isCurrentUser && <span className="ml-2 text-xs">(You)</span>}
                      </TableCell>
                      <TableCell className="text-bfcp-pink font-semibold">
                        {contestantData.episode1}
                      </TableCell>
                      <TableCell className="text-bfcp-pink font-semibold">
                        {contestantData.episode2}
                      </TableCell>
                      <TableCell className="text-bfcp-pink font-semibold">
                        {contestantData.episode3}
                      </TableCell>
                      <TableCell className="text-white font-bold text-lg">
                        {contestantData.total}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Contest Quests Table */}
        <Card className="contest-card">
          <CardHeader>
            <CardTitle className="text-white">Contest Quests</CardTitle>
            <p className="text-gray-300">Episode 3 is happening now. It is decorating a layout</p>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-300">Episode</TableHead>
                  <TableHead className="text-gray-300">Quest</TableHead>
                  <TableHead className="text-gray-300">Description</TableHead>
                  <TableHead className="text-gray-300">Deadline</TableHead>
                  <TableHead className="text-gray-300">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contestQuests.map((quest, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-white font-semibold">{quest.episode}</TableCell>
                    <TableCell className="text-white">{quest.quest}</TableCell>
                    <TableCell className="text-gray-300">{quest.description}</TableCell>
                    <TableCell className="text-white">{quest.deadline}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        quest.status === 'Completed' 
                          ? 'bg-green-900/50 text-green-300'
                          : quest.status === 'Active'
                          ? 'bg-blue-900/50 text-blue-300'
                          : 'bg-gray-900/50 text-gray-300'
                      }`}>
                        {quest.status}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
