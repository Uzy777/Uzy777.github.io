import { certifications } from "../../data/certifications";

const certStatusStyles = {
    Completed: "text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-400/10 dark:border-emerald-400/20",
    "In Progress": "text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-400/10 dark:border-amber-400/20",
    Planned: "text-blue-700 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-400/10 dark:border-blue-400/20",
};

const formatIssuedDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
        month: "short",
        year: "numeric",
    });
};

// Lower = greater precedence
const statusOrder = {
    "In Progress": 0,
    Planned: 1,
    Completed: 2,
};

const Certifications = () => {
    const sortedCertifications = [...certifications].sort((a, b) => {
        const statusDiff = (statusOrder[a.status] ?? 99) - (statusOrder[b.status] ?? 99);

        if (statusDiff !== 0) {
            return statusDiff;
        }

        if (a.issued && b.issued) {
            return new Date(b.issued) - new Date(a.issued);
        }

        return 0;
    });

    return (
        <div className="space-y-6 mt-8 mb-8">
            <div className="text-center space-y-2">
                <h3 className="text-lg font-medium tracking-wide">Certifications</h3>
            </div>

            <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {sortedCertifications.map((cert, index) => {
                    const isClickable = cert.status === "Completed" && cert.link;

                    return (
                        <div
                            key={`${cert.title}-${index}`}
                            className={`flex flex-col items-center text-center gap-3 px-4 py-4 rounded-xl transition ${
                                isClickable ? "cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 hover:-translate-y-0.5" : ""
                            }`}
                            onClick={() => {
                                if (isClickable) {
                                    window.open(cert.link, "_blank");
                                }
                            }}
                        >
                            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10">
                                <img
                                    src={cert.image}
                                    alt={`${cert.issuer} logo`}
                                    className="w-10 h-10 object-contain rounded-md bg-white p-1 dark:bg-neutral-100"
                                />
                            </div>

                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-tight">{cert.title}</p>
                                <p className="text-xs opacity-50">{cert.issuer}</p>
                                {cert.issued && <p className="text-[11px] opacity-40">Issued {formatIssuedDate(cert.issued)}</p>}
                            </div>

                            {cert.status && (
                                <span className={`px-2 py-0.5 rounded-full border text-[11px] ${certStatusStyles[cert.status] || ""}`}>{cert.status}</span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Certifications;
