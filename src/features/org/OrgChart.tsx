import { TEAM_MEMBERS } from '../../data/mockData';
import { Card } from '../../components/ui/Card';

export function OrgChart() {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl md:text-5xl font-bold font-serif mb-16 text-center">Meet the <span className="text-primary">Team</span></h2>

                <div className="flex flex-wrap justify-center gap-10">
                    {/* Simple linear layout for now, can be tree structure if needed, but cards look cleaner for 'About' style */}
                    {TEAM_MEMBERS.map((member, index) => (
                        <Card key={index} className="w-full sm:max-w-xs text-center p-6 border-none shadow-lg hover:shadow-xl transition-all">
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-secondary">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                            <p className="text-primary font-medium mb-4">{member.role}</p>
                            <div className="w-10 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto rounded-full" />
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
