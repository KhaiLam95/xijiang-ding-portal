
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/30 px-4 text-center">
      <div className="max-w-md">
        <h1 className="text-gradient mb-2 text-9xl font-bold">404</h1>
        <h2 className="mb-6 font-display text-3xl font-bold">页面未找到</h2>
        <p className="mb-8 text-lg text-muted-foreground">
          很抱歉，您要访问的页面不存在或已被移动。
        </p>
        <Link to="/">
          <Button size="lg" className="group">
            <HomeIcon className="mr-2 h-4 w-4" />
            返回首页
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
