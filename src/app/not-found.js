import Link from 'next/link'
import Image from 'next/image'
export default function NotFound() {
  return (
    <div>
      <section className="flex -mt-24 items-center h-screen">
	<div className="flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className=" font-extrabold text-9xl">
				<Image src="/assets/Banner_Image/detective-animation-404-error-page.gif" alt="Not-found-image" width="450" height="300"></Image>
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we {`couldn't`} find this page.</p>
			<p className="mt-4 mb-8 dark:text-gray-600">But {`don't`} worry, you can find plenty of other things on our homepage.</p>
			<Link href="/" className="px-8 py-3 font-semibold rounded bg-[#84b93e] text-gray-50">Back to homepage</Link>
		</div>
	</div>
</section>
    </div>
  )
}