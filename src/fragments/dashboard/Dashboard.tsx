'use client';

import { Button, Stack } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import Link from 'next/link';
import UserForm from '@/chunks/user-form/UserForm';
import useDashboard from './useDashboard';

export default function Dashboard() {
  const h = useDashboard();

  if (!h.user) {
    return null;
  }

  return (
    <>
      <Button component={Link} href="/build-form" leftSection={<IconPlus size={14} />}>
        Build a new form
      </Button>
      <Stack gap="md" my={32}>
        {h.forms?.map((form) => <UserForm key={form.uuid} form={form} />)}
      </Stack>
    </>
  );
}
