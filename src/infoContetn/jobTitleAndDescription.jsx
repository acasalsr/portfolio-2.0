import React from "react";
import { jobDescription } from "./jobs";

export function JobTitleAndDescription(Job) {
  return (
    <div className="container-medium padding-horizontal padding-large">
      <div class="flex-right">
        <Job job={jobDescription[0].content} />
      </div>
      <div class="flex-left">
        <div className="wrapper-paragraph">
          <h3 className="text-color-blue padding-bottom padding-medium">
            About it
          </h3>
          <p className="paragraph-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nunc vel
            vitae senectus senectus vel. Tellus urna pretium etiam mauris,
            pellentesque. Nunc, tristique interdum magna ultrices. Sit
            pellentesque fringilla a nisi, enim nec semper tellus. Mattis sociis
            eu ante sed hendrerit nunc, tortor. Ac leo orci, tempor accumsan,
            nisl auctor nibh. Phasellus vitae quis dui pretium. Cursus aliquam
            diam pellentesque viverra lorem donec in aliquam. Sapien molestie
            gravida pellentesque aliquam quis amet, sem amet. nisi, enim nec
            semper tellus. Mattis sociis eu ante sed hendrerit nunc, tortor. Ac
            leo orci, tempor accumsa
          </p>
          <button
            type="button"
            class="text-size-regular button-primary margin-top margin-xlarge shadow"
          >
            Watch full project
          </button>
        </div>
      </div>
      {/* Content 2 */}
      
      {/* Content 2 */}
      <div class="flex-left">
        <Job job={jobDescription[0].content} />
      </div>
      <div class="flex-right">
        <div className="wrapper-paragraph">
          <h3 className="text-color-blue padding-bottom padding-medium">
            About it
          </h3>
          <p className="paragraph-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nunc vel
            vitae senectus senectus vel. Tellus urna pretium etiam mauris,
            pellentesque. Nunc, tristique interdum magna ultrices. Sit
            pellentesque fringilla a nisi, enim nec semper tellus. Mattis sociis
            eu ante sed hendrerit nunc, tortor. Ac leo orci, tempor accumsan,
            nisl auctor nibh. Phasellus vitae quis dui pretium. Cursus aliquam
            diam pellentesque viverra lorem donec in aliquam. Sapien molestie
            gravida pellentesque aliquam quis amet, sem amet. nisi, enim nec
            semper tellus. Mattis sociis eu ante sed hendrerit nunc, tortor. Ac
            leo orci, tempor accumsa
          </p>
          <button
            type="button"
            class="text-size-regular button-primary margin-top margin-xlarge shadow"
          >
            Watch full project
          </button>
        </div>
      </div>
    </div>
  );
}
