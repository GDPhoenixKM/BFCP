
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface LoginForm {
  username: string;
  password: string;
}

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

  // Valid contestant names - actual contestants from the contest
  const validContestants = [
    "Mi phax",
    "ImmPotatoGD", 
    "Crestial",
    "Abso",
    "MeadowDream",
    "Mitchell",
    "Ryxenol7"
  ];

  const onSubmit = (data: LoginForm) => {
    // Check if username is a valid contestant and password is correct
    if (validContestants.includes(data.username) && data.password === "bfcpofficial") {
      // Store contestant info in localStorage
      localStorage.setItem("contestant", JSON.stringify({
        username: data.username,
        isLoggedIn: true
      }));
      navigate("/dashboard");
    } else if (!validContestants.includes(data.username)) {
      setError("Invalid contestant name. Please check your username.");
    } else {
      setError("Incorrect password. Use: bfcpofficial");
    }
  };

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center px-4">
      <Card className="w-full max-w-md contest-card">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-white">BFCP 2025</CardTitle>
          <CardDescription className="text-gray-300">
            Contestant Login Portal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-white">Contestant Name</Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your contestant name"
                {...register("username", { required: "Contestant name is required" })}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              {errors.username && (
                <p className="text-red-400 text-sm">{errors.username.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                {...register("password", { required: "Password is required" })}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              {errors.password && (
                <p className="text-red-400 text-sm">{errors.password.message}</p>
              )}
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-bfcp-purple to-bfcp-pink hover:from-bfcp-purple/80 hover:to-bfcp-pink/80"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
