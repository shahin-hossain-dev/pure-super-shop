
const Faq = () => {
    return (
        <div className="mt-5">
            <h1 className="text-2xl font-bold">FAQ</h1>
            <div >
                <div className="space-y-4 mt-5">
                    <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden" open>
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                            <h2 className="font-medium">What is Deal of the Day?</h2>

                            <span className="relative size-5 shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                        Deal of the Day is a special opportunity for our customers to get a great deal! Under this program, every single day beginning at 10 PM, Chaldal offers a limited stock of selected products at special prices.
                        To activate this offer, a minimum order value is required.
                        </p>
                    </details>

                    <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                            <h2 className="font-medium">How does it work?</h2>

                            <span className="relative size-5 shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                        Deal of the Day is automatically activated through a minimum order value. You will not be able to avail this deal if your order value does not meet the deals requirements.
                        </p>
                    </details>
                    <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                            <h2 className="font-medium">What is the minimum order value to activate Deal of the day?</h2>

                            <span className="relative size-5 shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                        The minimum order value depends on the product selected by Chaldal for that specific Deal of the Day
                        </p>
                    </details>
                    <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                            <h2 className="font-medium">Is there a validity duration for Deal of the Day?</h2>

                            <span className="relative size-5 shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                        Yes, Deal of the Day is valid for 24 hours (1 day). However, you have to hurry as we only offer limited stock for Deal of the Day. The deal is therefore subject to product availability and will end once products are sold out.
                        </p>
                    </details>
                    {/* <details className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                            <h2 className="font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

                            <span className="relative size-5 shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 opacity-100 group-open:opacity-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 opacity-0 group-open:opacity-100"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <p className="mt-4 leading-relaxed text-gray-700">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
                            recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
                            consequuntur distinctio corporis earum similique!
                        </p>
                    </details> */}
                </div>
            </div>

        </div>
    );
};

export default Faq;