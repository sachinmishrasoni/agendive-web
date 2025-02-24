import React from 'react'
// import AppLayout from '@/components/common/Layout'
import AppLayout from '@/components/layout/AppLayout'

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppLayout>
            {children}
        </AppLayout>
    )
}

export default PageLayout