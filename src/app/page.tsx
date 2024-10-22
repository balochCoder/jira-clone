import React from 'react';
import {Button} from "@/components/ui/button";
import {Select} from "@/components/ui/select";

const Page = () => {
    return (
        <div className="flex gap-4 m-2">
            <Select></Select>

            <Button size="xs">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="muted">Muted</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="teritary">Teritary</Button>

        </div>
    );
};

export default Page;