// ./components/FinancialApp/index.js

import React from 'react'
import Sidebar from './Sidebar'


export default function FinancialApp(props) {
    return (
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
            <div class="w-full py-6 flex items-center border-b border-indigo-500 lg:border-none">
                <div className="flex">

                <Sidebar />

                { props.children  }
                </div>
            </div>
        </nav>
    )
}
