"use client";
import React, { Suspense } from 'react'
import { AntdRegistry } from '@ant-design/nextjs-registry'
// import { createCache, StyleProvider } from '@ant-design/cssinjs'
import Loading from '@/components/common/loading';

const CombineProvider = ({ children }: { children: React.ReactNode }) => {
    // const cache = createCache();
    return (
        <AntdRegistry>
            {/* <StyleProvider cache={cache} hashPriority="high" ssrInline> */}
            <Suspense fallback={<Loading />}>
                {children}
            </Suspense>
            {/* </StyleProvider> */}
        </AntdRegistry>
    )
}

export default CombineProvider