import { redirect } from 'next/navigation';

import { db } from '@/db';

export default function SnippetsCreatePage() {
    async function createSnippet(formData: FormData) {
        'use server';

        const title = formData.get("title") as string;
        const code = formData.get("code") as string;

        const snippet = await db.snippet.create({
            data: {
                title,
                code,
            }
        });
        console.log(snippet);
        redirect('/');

    }
    return <form action={createSnippet}>
        <input name="title" placeholder="title" className="border my-2" />
        <br />
        <input name="code" placeholder="code" className="border my-2" />
        <br />
        <button className="bg-blue-500 text-white py-2 px-4 rounded" type="submit">Create</button>
    </form>
}
