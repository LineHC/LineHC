import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  FlaskConical,
  BookOpen,
  Sparkles,
  Rocket,
  GraduationCap,
  FileText,
  Mail,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const primary = [
  { title: "Home", url: "/", icon: Home },
  { title: "Research", url: "/research", icon: FlaskConical },
  { title: "Publications", url: "/publications", icon: BookOpen },
];

const initiatives = [
  { title: "YODA", url: "/yoda", icon: Sparkles },
  { title: "Interhuman AI", url: "/interhuman", icon: Rocket },
];

const academy = [
  { title: "For Students", url: "/students", icon: GraduationCap },
  { title: "CV", url: "/cv", icon: FileText },
  { title: "Contact", url: "/contact", icon: Mail },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const currentPath = useRouterState({ select: (r) => r.location.pathname });
  const isActive = (p: string) => (p === "/" ? currentPath === "/" : currentPath.startsWith(p));

  const renderGroup = (label: string, items: typeof primary) => (
    <SidebarGroup>
      {!collapsed && (
        <SidebarGroupLabel className="text-[0.65rem] tracking-[0.2em] uppercase text-sidebar-foreground/50 font-medium px-3">
          {label}
        </SidebarGroupLabel>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.url}>
              <SidebarMenuButton
                asChild
                isActive={isActive(item.url)}
                className="data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-primary data-[active=true]:border-l-2 data-[active=true]:border-sidebar-primary rounded-none hover:bg-sidebar-accent/60"
              >
                <Link to={item.url} className="flex items-center gap-3">
                  <item.icon className="h-4 w-4 shrink-0" />
                  {!collapsed && <span className="font-sans text-sm">{item.title}</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="px-4 pt-6 pb-4 border-b border-sidebar-border/60">
        {collapsed ? (
          <div className="text-sidebar-primary font-serif text-2xl text-center">L</div>
        ) : (
          <div>
            <div className="text-sidebar-primary font-serif text-2xl leading-tight">
              Line K. H.
              <br /> Clemmensen
            </div>
            <div className="mt-2 text-[0.7rem] tracking-[0.18em] uppercase text-sidebar-foreground/60">
              Professor · KU · DTU
            </div>
          </div>
        )}
      </SidebarHeader>

      <SidebarContent className="pt-2">
        {renderGroup("Academic", primary)}
        {renderGroup("Initiatives", initiatives)}
        {renderGroup("More", academy)}
      </SidebarContent>

      {!collapsed && (
        <SidebarFooter className="px-4 py-4 text-[0.7rem] text-sidebar-foreground/50 border-t border-sidebar-border/60">
          © {new Date().getFullYear()} L. K. H. Clemmensen
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
