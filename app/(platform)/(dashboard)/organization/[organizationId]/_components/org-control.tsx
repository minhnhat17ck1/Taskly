'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useOrganizationList } from '@clerk/nextjs';

export const OrgControl = () => {
  const params = useParams();
  const { setActive } = useOrganizationList(); // Change the organization automatically when the URL changes

  useEffect(() => {
    if (!setActive) return;

    setActive({
      organization: params.organizationId as string,
    });
  }, [setActive, params.organizationId]);

  return null;
};
