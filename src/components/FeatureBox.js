import React from "react";

function FeatureBox({ title, subtitle, description }) {
    return (
        <div className="bg-white rounded w-2/5 mb-8 p-4 mr-24">
            <h1 className="text-xl leading-tight mb-4 font-semibold">
                {subtitle && (
                    <>
                        {subtitle}{" "}
                        <span className="text-ActivityPbackground1">
                            {title}
                        </span>
                    </>
                )}
                {!subtitle && title}
            </h1>
            <p className="text-base">{description}</p>
        </div>
    );
}

export default FeatureBox;
