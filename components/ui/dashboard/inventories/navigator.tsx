"use client";
import { Breadcrumbs, Link } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { sentenceCase } from "change-case"

type Snippet = {
    label: string;
    href: string;
    disabled?: boolean;
}

export default function InventoriesNavigator() {
    const [snippets, setSnippets] = useState<Snippet[]>([]);
    const pathname = usePathname();

    useLayoutEffect(() => {
        const snippetList: Snippet[] = [];
        const path = pathname.split("/").slice(2);
        if (path.length <= 1) {
            setSnippets([]);
            return;
        }

        let href = "/dashboard";
        for (let i = 0; i < path.length; i++) {
            href += `/${path[i]}`;
            snippetList.push({
                label: sentenceCase(path[i]),
                href,
                disabled: i === 0 || i === path.length - 1,
            });
        }
        setSnippets(snippetList);
    }, [pathname]);

    return snippets.length === 0 ? null : (
        <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            sx={{ fontSize: "0.9rem", color: "text.primary" }}
        >
            {snippets.map((snippet, index) => (
                <Link
                    component={"a"}
                    key={`${snippet.label}-${index}`}
                    href={snippet.href}
                    color={snippet.disabled ? "text.disabled" : "text.primary"}
                    underline={snippet.disabled ? "none" : "hover"}
                    unselectable={snippet.disabled ? "on" : "off"}
                >
                    {snippet.label}
                </Link>
            ))}
        </Breadcrumbs>
    )
}