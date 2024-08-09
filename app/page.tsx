import { Chip, Stack, Box, Button } from '@mui/material';
import Link from 'next/link';

export default async function Index() {
  return (
    <div className="flex-1 flex flex-col gap-20 items-center mt-10">
      <div className="flex-1 flex flex-col gap-20 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <section className="flex-1 flex flex-col gap-3 items-center">
            <header className='text-center'>
              <h2 className="font-bold text-3xl md:text-4xl">
                <span className="text-green-500">Welcome</span> to Clutter
              </h2>
              <Chip className="text-xs italic px-3" label="The fastest way to manage your pantry" />
            </header>
            <p className="text-xl text-center mx-auto max-w-[600px]">
              <span className="text-green-500">Clutter</span> is a pantry management app
              that helps you keep track of your groceries and recipes.
            </p>
            <Stack direction="row" gap={3} className="mt-4 mb-10 text-background">
              <Stack className="flex-1 bg-foreground p-4 rounded-md">
                <Chip label="Keep track of your groceries" color="secondary" />
                <Box className="mt-3">
                  <p className="text-sm">
                    Add items to your pantry and keep track of what you have on hand.
                    {" "}
                    <span className="text-green-500">Clutter</span> will help you make sure you never run out of your essentials.
                  </p>
                </Box>
              </Stack>
              <Stack bgcolor="ActiveCaption" border={1} borderColor="HighlightText" className="flex-1 text-foreground p-4 rounded-md">
                <Chip label="Find recipes" color="primary" />
                <Box className="mt-3">
                  <p className="text-sm">
                    Search for recipes based on the ingredients you have in your pantry.
                    {" "}
                    <span className="text-green-500">Clutter</span> will help you find the perfect meal for any occasion.
                  </p>
                </Box>
              </Stack>
              <Stack bgcolor="thistle" className="flex-1 text-background p-4 rounded-md">
                <Chip label="Plan your meals" color="info" />
                <Box className="mt-3">
                  <p className="text-sm">
                    Create meal plans for the week and generate a shopping list based on the recipes you want to make.
                    {" "}
                    <span className="text-green-800">Clutter</span> will help you stay organized and save time.
                  </p>
                </Box>
              </Stack>
            </Stack>
            <Button size="large" variant="outlined" color="success">
              <Link href="/login" passHref>Get Started</Link>
            </Button>
          </section>
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Clutter by{" "}
          <a
            href="https://github.com/OVECJOE/clutter"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer noopener"
          >
            ZSE
          </a>
        </p>
      </footer>
    </div>
  );
}
