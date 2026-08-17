import { Metadata } from 'next';
import { Container } from '@/components/shared/container';
import { Button } from '@/components/shared/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/shared/card';
import { Input, Textarea, Select, Checkbox, FormField } from '@/components/ui/form';
import { Separator } from '@/components/ui/badge';
import { Eyebrow, Quote, KeyValue } from '@/components/ui/content';
import { HeartPulse, Globe2, ShieldAlert, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export const metadata: Metadata = {
  title: 'Design System | Resilience@Work',
  description: 'Design system documentation and components',
};

export default function DesignSystemPage() {
  return (
    <div className="py-12">
      <Container size="wide">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="font-display text-5xl font-medium mb-2">Resilience@Work Design System</h1>
            <p className="text-[rgb(var(--muted-foreground))]">Quiet confidence • Institutional trust • Professional serenity</p>
          </div>
          <ThemeToggle />
        </div>

        <Separator className="my-12" />

        {/* Colors */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-medium mb-8">Color Palette</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Primary Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="h-24 rounded-[var(--radius-md)] bg-[rgb(var(--primary))] mb-2" />
                  <p className="text-sm font-mono">--primary</p>
                </div>
                <div>
                  <div className="h-24 rounded-[var(--radius-md)] bg-[rgb(var(--primary-hover))] mb-2" />
                  <p className="text-sm font-mono">--primary-hover</p>
                </div>
                <div>
                  <div className="h-24 rounded-[var(--radius-md)] bg-[rgb(var(--accent))] mb-2" />
                  <p className="text-sm font-mono">--accent</p>
                </div>
                <div>
                  <div className="h-24 rounded-[var(--radius-md)] bg-[rgb(var(--accent-soft))] border border-[rgb(var(--border))] mb-2" />
                  <p className="text-sm font-mono">--accent-soft</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Surfaces</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div>
                  <div className="h-24 rounded-[var(--radius-md)] bg-[rgb(var(--background))] border border-[rgb(var(--border))] mb-2" />
                  <p className="text-sm font-mono">--background</p>
                </div>
                <div>
                  <div className="h-24 rounded-[var(--radius-md)] bg-[rgb(var(--surface))] border border-[rgb(var(--border))] mb-2" />
                  <p className="text-sm font-mono">--surface</p>
                </div>
                <div>
                  <div className="h-24 rounded-[var(--radius-md)] bg-[rgb(var(--surface-muted))] border border-[rgb(var(--border))] mb-2" />
                  <p className="text-sm font-mono">--surface-muted</p>
                </div>
                <div>
                  <div className="h-24 rounded-[var(--radius-md)] bg-[rgb(var(--surface-elevated))] border border-[rgb(var(--border))] mb-2" />
                  <p className="text-sm font-mono">--surface-elevated</p>
                </div>
                <div>
                  <div className="h-24 rounded-[var(--radius-md)] bg-[rgb(var(--surface-inverse))] mb-2" />
                  <p className="text-sm font-mono">--surface-inverse</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Semantic Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <div className="h-24 rounded-[var(--radius-md)] bg-[rgb(var(--success))] mb-2" />
                  <p className="text-sm font-mono">--success</p>
                </div>
                <div>
                  <div className="h-24 rounded-[var(--radius-md)] bg-[rgb(var(--warning))] mb-2" />
                  <p className="text-sm font-mono">--warning</p>
                </div>
                <div>
                  <div className="h-24 rounded-[var(--radius-md)] bg-[rgb(var(--danger))] mb-2" />
                  <p className="text-sm font-mono">--danger</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Typography */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-medium mb-8">Typography</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-[rgb(var(--muted-foreground))] mb-2">Display Hero (Lora)</p>
              <h1 className="font-display text-[var(--text-6xl)] font-medium leading-tight">Building Resilience at Work</h1>
            </div>
            
            <div>
              <p className="text-sm text-[rgb(var(--muted-foreground))] mb-2">Page Title (Lora)</p>
              <h2 className="font-display text-[var(--text-5xl)] font-medium">Professional Mental Wellbeing</h2>
            </div>

            <div>
              <p className="text-sm text-[rgb(var(--muted-foreground))] mb-2">Section Title (Lora)</p>
              <h3 className="font-display text-4xl font-medium">Expertise & Services</h3>
            </div>

            <div>
              <p className="text-sm text-[rgb(var(--muted-foreground))] mb-2">Card Title (Inter)</p>
              <h4 className="text-xl font-semibold">Psychosocial Risk Prevention</h4>
            </div>

            <div>
              <p className="text-sm text-[rgb(var(--muted-foreground))] mb-2">Eyebrow</p>
              <Eyebrow>International Expertise</Eyebrow>
            </div>

            <div>
              <p className="text-sm text-[rgb(var(--muted-foreground))] mb-2">Body Text</p>
              <p className="text-base leading-relaxed max-w-3xl">
                Resilience@Work provides psychological support after a critical incident, crisis support in
                international mobility, and webinars and workshops on well-being and mental health.
              </p>
            </div>

            <div>
              <p className="text-sm text-[rgb(var(--muted-foreground))] mb-2">Quote (Lora)</p>
              <Quote author="Jocelyne Katshinda" role="Administratrice générale">
                Professional resilience is built through trust, consistency, and genuine human connection.
              </Quote>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Buttons */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-medium mb-8">Buttons</h2>
          
          <div className="space-y-6">
            <div>
              <p className="text-sm text-[rgb(var(--muted-foreground))] mb-4">Variants</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="link">Link Button</Button>
                <Button variant="inverse">Inverse Button</Button>
              </div>
            </div>

            <div>
              <p className="text-sm text-[rgb(var(--muted-foreground))] mb-4">Sizes</p>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div>
              <p className="text-sm text-[rgb(var(--muted-foreground))] mb-4">With Icons</p>
              <div className="flex flex-wrap gap-4">
                <Button leftIcon={<Mail className="h-4 w-4" />}>Contact Us</Button>
                <Button rightIcon={<Globe2 className="h-4 w-4" />}>International</Button>
              </div>
            </div>

            <div>
              <p className="text-sm text-[rgb(var(--muted-foreground))] mb-4">States</p>
              <div className="flex flex-wrap gap-4">
                <Button disabled>Disabled</Button>
                <Button isLoading>Loading</Button>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Cards */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-medium mb-8">Cards</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card variant="default">
              <CardHeader icon={<HeartPulse className="h-6 w-6" />}>
                <CardTitle>Default Card</CardTitle>
              </CardHeader>
              <CardDescription>
                Standard card with default styling for general content presentation.
              </CardDescription>
            </Card>

            <Card variant="muted">
              <CardHeader icon={<Globe2 className="h-6 w-6" />}>
                <CardTitle>Muted Card</CardTitle>
              </CardHeader>
              <CardDescription>
                Subtle background for secondary information or grouped content.
              </CardDescription>
            </Card>

            <Card variant="elevated">
              <CardHeader icon={<ShieldAlert className="h-6 w-6" />}>
                <CardTitle>Elevated Card</CardTitle>
              </CardHeader>
              <CardDescription>
                Enhanced shadow for emphasized or important content sections.
              </CardDescription>
            </Card>

            <Card variant="interactive" hover>
              <CardTitle>Interactive Card</CardTitle>
              <CardDescription className="mt-2">
                Hover over this card to see the interactive elevation effect.
              </CardDescription>
            </Card>

            <Card variant="outline">
              <CardTitle>Outline Card</CardTitle>
              <CardDescription className="mt-2">
                Transparent background with strong border for distinct separation.
              </CardDescription>
            </Card>

            <Card variant="inverse">
              <CardTitle>Inverse Card</CardTitle>
              <CardDescription className="mt-2">
                Dark surface for contrast and visual hierarchy in specific sections.
              </CardDescription>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Badges */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-medium mb-8">Badges</h2>
          
          <div className="flex flex-wrap gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="muted">Muted</Badge>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Forms */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-medium mb-8">Form Components</h2>
          
          <div className="max-w-2xl space-y-6">
            <FormField label="Full Name" required hint="Enter your complete name">
              <Input placeholder="Jocelyne Katshinda" />
            </FormField>

            <FormField label="Email Address" required>
              <Input type="email" placeholder="admin@resilienceatwork.eu" />
            </FormField>

            <FormField label="Phone Number">
              <Input type="tel" placeholder="+32 470 542 390" />
            </FormField>

            <FormField label="Service Interest">
              <Select>
                <option value="">Select a service</option>
                <option value="psychosocial">Psychosocial Risk Prevention</option>
                <option value="mobility">International Mobility Support</option>
                <option value="crisis">Crisis Management</option>
                <option value="training">Professional Training</option>
              </Select>
            </FormField>

            <FormField label="Message" hint="Describe your needs or questions">
              <Textarea placeholder="How can we support your organization?" />
            </FormField>

            <Checkbox label="I agree to the privacy policy" id="privacy" />

            <div>
              <h3 className="text-lg font-semibold mb-4">Form States</h3>
              <div className="space-y-4">
                <FormField label="Success State">
                  <Input success value="Valid input" />
                </FormField>
                <FormField label="Error State" error="This field is required">
                  <Input error />
                </FormField>
                <FormField label="Disabled State">
                  <Input disabled value="Cannot be edited" />
                </FormField>
              </div>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Key Values */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-medium mb-8">Key-Value Pairs</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="space-y-4">
                <KeyValue label="Languages" value="3" />
                <KeyValue label="Countries" value="15+" />
                <KeyValue label="Expertise Areas" value="4" />
              </div>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Icons */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-medium mb-8">Icon System (Lucide)</h2>
          
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col items-center gap-2">
              <HeartPulse className="h-8 w-8 text-[rgb(var(--accent))]" />
              <span className="text-xs">Psychosocial</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Globe2 className="h-8 w-8 text-[rgb(var(--accent))]" />
              <span className="text-xs">International</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldAlert className="h-8 w-8 text-[rgb(var(--accent))]" />
              <span className="text-xs">Crisis</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="h-8 w-8 text-[rgb(var(--accent))]" />
              <span className="text-xs">Contact</span>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
