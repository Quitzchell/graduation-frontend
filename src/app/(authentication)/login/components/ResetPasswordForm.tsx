import {useRef, useState} from "react";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/app/components/ui/card";
import {Label} from "@/app/components/ui/label";
import {Input} from "@/app/components/ui/input";
import {Button} from "@/app/components/ui/button";



export default function ResetPasswordForm({toggleForm}) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const [email, setEmail] = useState('');
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${apiUrl}/api/reset-password`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email}),
            });

            if(response.ok) {
                alert('Email to reset password sent')
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleResetPasswordClick = () => {
        formRef.current.dispatchEvent(new Event('submit', {bubbles: true}));
    };


    return (
    <Card className="w-100">
        <CardHeader>
            <CardTitle>Reset Password</CardTitle>
        </CardHeader>
        <CardContent>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter className={"grid grid-cols-2 gap-x-6"}>
            <Button type="button" onClick={toggleForm} className="w-full">Return to login</Button>
            <Button type="button" onClick={handleResetPasswordClick} className="w-full">Send email</Button>
        </CardFooter>
    </Card>)
}
