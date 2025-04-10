
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Github, Mail } from 'lucide-react';
import MainLayout from '@/components/layout/MainLayout';

const Login: React.FC = () => {
  return (
    <MainLayout>
      <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
        <div className="cyber-card p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Welcome to CodeArena</h1>
            <p className="text-cyber-foreground/70 text-sm">
              Sign in to join challenges and track your progress
            </p>
          </div>
          
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="youremail@example.com"
                    className="cyber-input"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to="/forgot-password"
                      className="text-xs text-cyber-primary hover:text-cyber-accent transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="cyber-input"
                  />
                </div>
                
                <Button className="cyber-button w-full">Sign In</Button>
                
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-cyber-primary/20"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-cyber-background px-4 text-xs text-cyber-foreground/50">
                      OR CONTINUE WITH
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="border-cyber-primary/30 hover:bg-cyber-primary/10"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyber-primary/30 hover:bg-cyber-primary/10"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Google
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="signup">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="Your name"
                    className="cyber-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="youremail@example.com"
                    className="cyber-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="Create a strong password"
                    className="cyber-input"
                  />
                </div>
                
                <div className="text-xs text-cyber-foreground/70">
                  By signing up, you agree to our{" "}
                  <Link
                    to="/terms"
                    className="text-cyber-primary hover:text-cyber-accent transition-colors"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="text-cyber-primary hover:text-cyber-accent transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  .
                </div>
                
                <Button className="cyber-button w-full">Create Account</Button>
                
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-cyber-primary/20"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-cyber-background px-4 text-xs text-cyber-foreground/50">
                      OR CONTINUE WITH
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    className="border-cyber-primary/30 hover:bg-cyber-primary/10"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyber-primary/30 hover:bg-cyber-primary/10"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Google
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
