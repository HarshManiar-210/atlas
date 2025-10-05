import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
  BarChart3,
  Users,
  Settings,
  Plus,
  Download,
  Share2,
} from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      {/* Header */}
      <header className='border-b bg-card'>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <BarChart3 className='h-8 w-8 text-primary' />
            <h1 className='text-2xl font-bold'>Atlas Dashboard</h1>
          </div>
          <div className='flex items-center space-x-4'>
            <Button variant='outline' size='sm'>
              <Share2 className='h-4 w-4 mr-2' />
              Share
            </Button>
            <Button variant='outline' size='sm'>
              <Download className='h-4 w-4 mr-2' />
              Export
            </Button>
            <Button size='sm'>
              <Plus className='h-4 w-4 mr-2' />
              Add Widget
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='container mx-auto px-4 py-8'>
        <div className='space-y-8'>
          {/* Welcome Section */}
          <div className='text-center space-y-4'>
            <h2 className='text-3xl font-bold tracking-tight'>
              Welcome to Atlas
            </h2>
            <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
              A modern, collaborative platform for building and viewing
              real-time data visualizations.
            </p>
            <div className='flex justify-center space-x-2'>
              <Badge variant='secondary'>Real-time Collaboration</Badge>
              <Badge variant='secondary'>Interactive Charts</Badge>
              <Badge variant='secondary'>Live Cursor Tracking</Badge>
            </div>
          </div>

          {/* Dashboard Preview */}
          <Card className='w-full'>
            <CardHeader>
              <div className='flex items-center justify-between'>
                <div>
                  <CardTitle>Dashboard Preview</CardTitle>
                  <CardDescription>
                    Your collaborative dashboard with real-time updates
                  </CardDescription>
                </div>
                <div className='flex items-center space-x-2'>
                  <div className='flex -space-x-2'>
                    <Avatar className='h-8 w-8 border-2 border-background'>
                      <AvatarImage src='/placeholder-avatar.jpg' />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar className='h-8 w-8 border-2 border-background'>
                      <AvatarImage src='/placeholder-avatar.jpg' />
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <Avatar className='h-8 w-8 border-2 border-background'>
                      <AvatarImage src='/placeholder-avatar.jpg' />
                      <AvatarFallback>CD</AvatarFallback>
                    </Avatar>
                  </div>
                  <Badge variant='outline'>3 online</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue='overview' className='w-full'>
                <TabsList className='grid w-full grid-cols-3'>
                  <TabsTrigger value='overview'>Overview</TabsTrigger>
                  <TabsTrigger value='analytics'>Analytics</TabsTrigger>
                  <TabsTrigger value='reports'>Reports</TabsTrigger>
                </TabsList>
                <TabsContent value='overview' className='space-y-4'>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <Card>
                      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                        <CardTitle className='text-sm font-medium'>
                          Total Revenue
                        </CardTitle>
                        <BarChart3 className='h-4 w-4 text-muted-foreground' />
                      </CardHeader>
                      <CardContent>
                        <div className='text-2xl font-bold'>$45,231.89</div>
                        <p className='text-xs text-muted-foreground'>
                          +20.1% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                        <CardTitle className='text-sm font-medium'>
                          Active Users
                        </CardTitle>
                        <Users className='h-4 w-4 text-muted-foreground' />
                      </CardHeader>
                      <CardContent>
                        <div className='text-2xl font-bold'>2,350</div>
                        <p className='text-xs text-muted-foreground'>
                          +180.1% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                        <CardTitle className='text-sm font-medium'>
                          Conversion Rate
                        </CardTitle>
                        <Settings className='h-4 w-4 text-muted-foreground' />
                      </CardHeader>
                      <CardContent>
                        <div className='text-2xl font-bold'>12.5%</div>
                        <p className='text-xs text-muted-foreground'>
                          +2.1% from last month
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value='analytics' className='space-y-4'>
                  <Card>
                    <CardHeader>
                      <CardTitle>Analytics Dashboard</CardTitle>
                      <CardDescription>
                        Detailed analytics and insights
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='h-64 bg-muted rounded-lg flex items-center justify-center'>
                        <p className='text-muted-foreground'>
                          Analytics charts will be rendered here
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value='reports' className='space-y-4'>
                  <Card>
                    <CardHeader>
                      <CardTitle>Reports</CardTitle>
                      <CardDescription>
                        Generate and view reports
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='h-64 bg-muted rounded-lg flex items-center justify-center'>
                        <p className='text-muted-foreground'>
                          Report generation interface will be here
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Separator />

          {/* Features Section */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center space-x-2'>
                  <Users className='h-5 w-5' />
                  <span>Real-time Collaboration</span>
                </CardTitle>
                <CardDescription>
                  See where other users are pointing their mice and collaborate
                  in real-time
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center space-x-2'>
                  <BarChart3 className='h-5 w-5' />
                  <span>Interactive Charts</span>
                </CardTitle>
                <CardDescription>
                  Create beautiful, interactive charts with drag-and-drop
                  functionality
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className='flex items-center space-x-2'>
                  <Settings className='h-5 w-5' />
                  <span>Customizable Widgets</span>
                </CardTitle>
                <CardDescription>
                  Configure widgets with complex forms and real-time updates
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
