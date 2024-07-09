export function Signup() {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="w-full max-w-md p-8 space-y-8 bg-white border border-gray-200 rounded-lg shadow-md">
                <div>
                    <h2 className="text-3xl font-extrabold text-center">Sign up</h2>
                </div>
                <form className="mt-8 space-y-6">
                    <div className="space-y-4">
                        <LabelledInput label="First Name" placeholder="John" />
                        <LabelledInput label="Last Name" placeholder="Doe" />
                        <LabelledInput label="Email" placeholder="john.doe@example.com" type="email" />
                        <LabelledInput label="Username" placeholder="johndoe" />
                        <LabelledInput label="Password" type="password" placeholder="••••••••" />
                        <LabelledInput label="Confirm Password" type="password" placeholder="••••••••" />
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" id="terms" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" required />
                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                            I agree to the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                        </label>
                    </div>
                    <button type="submit" className="w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold">{label}</label>
            <input type={type || "text"} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    );
}
