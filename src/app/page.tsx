import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col font-body">
            {/* Navigation */}
            <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-brand-primary"></div>
                        <span className="text-xl font-bold font-display text-brand-primary">
                            OneSurvey
                        </span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-700">
                        <a href="#" className="hover:text-brand-primary transition-colors">Features</a>
                        <a href="#" className="hover:text-brand-primary transition-colors">Solutions</a>
                        <a href="#" className="hover:text-brand-primary transition-colors">Pricing</a>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="hidden sm:flex">
                            Log in
                        </Button>
                        <Button size="sm">Get Started</Button>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white to-neutral-100">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-8 text-center">
                            <div className="space-y-4 max-w-3xl">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-display text-brand-primary">
                                    Unified Security Site Surveys from Field to Office
                                </h1>
                                <p className="mx-auto max-w-[700px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Stop using paper and disconnected tools. OneSurvey unifies field capture, collaborative design, and proposal handoffs for security integrators.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button size="lg" className="px-8">
                                    Start Free Trial
                                </Button>
                                <Button variant="outline" size="lg" className="px-8">
                                    Book a Demo
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="w-full py-24 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                            <div className="inline-block rounded-full bg-brand-accent/20 px-3 py-1 text-sm text-brand-primary font-medium">
                                Key Features
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display text-brand-primary">
                                Everything you need to win more bids
                            </h2>
                            <p className="max-w-[900px] text-neutral-500 md:text-xl/relaxed">
                                Streamline your workflow with tools designed specifically for security professionals.
                            </p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <div className="mb-4 h-12 w-12 rounded-lg bg-brand-accent/20 flex items-center justify-center text-brand-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                        </svg>
                                    </div>
                                    <CardTitle>Digital Site Surveys</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-neutral-500">
                                        Capture photos, notes, and requirements on digital floor plans in real-time. No more paper notes or lost photos.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <div className="mb-4 h-12 w-12 rounded-lg bg-brand-accent/20 flex items-center justify-center text-brand-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                                        </svg>
                                    </div>
                                    <CardTitle>Collaborative Design</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-neutral-500">
                                        Work together with your team to design security systems directly on the floor plan. Drag and drop cameras, sensors, and more.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <div className="mb-4 h-12 w-12 rounded-lg bg-brand-accent/20 flex items-center justify-center text-brand-primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                        </svg>
                                    </div>
                                    <CardTitle>Automated Proposals</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-neutral-500">
                                        Generate professional, bid-ready proposals with a single click. Include bill of materials, labor estimates, and site photos.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Strip */}
                <section className="w-full py-24 bg-brand-primary text-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-display">
                                Ready to modernize your site surveys?
                            </h2>
                            <p className="max-w-[600px] text-brand-accent md:text-xl/relaxed">
                                Join hundreds of security integrators who are winning more business with OneSurvey.
                            </p>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                                <Button size="lg" className="px-8 bg-white text-brand-primary hover:bg-neutral-100">
                                    Get Started for Free
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full py-12 bg-neutral-900 text-neutral-400 border-t border-neutral-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <div className="h-6 w-6 rounded bg-brand-primary"></div>
                                <span className="text-lg font-bold text-white font-display">OneSurvey</span>
                            </div>
                            <p className="text-sm">
                                The complete platform for security site surveys and system design.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Product</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-neutral-800 pt-8 text-center text-sm">
                        © {new Date().getFullYear()} OneSurvey. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}
