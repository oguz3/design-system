import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgStorybookInverted = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 148 20"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none">
      <path
        d="m11.948.192-.094 2.266a.15.15 0 0 0 .24.126l.88-.668.744.586a.15.15 0 0 0 .243-.123L13.881.07l1.103-.069a1.006 1.006 0 0 1 1.069 1.004v17.988A1.006 1.006 0 0 1 15.002 20L1.58 19.396a1.006 1.006 0 0 1-.96-.967L0 1.921A1.006 1.006 0 0 1 .944.88L11.948.192zm-2.56 7.54c0 .391 2.635.204 2.988-.071 0-2.664-1.429-4.064-4.047-4.064-2.617 0-4.084 1.422-4.084 3.554 0 3.714 5.013 3.786 5.013 5.811 0 .57-.279.907-.892.907-.798 0-1.113-.408-1.076-1.794 0-.3-3.045-.394-3.138 0-.236 3.36 1.857 4.328 4.252 4.328 2.32 0 4.14-1.237 4.14-3.476 0-3.98-5.087-3.874-5.087-5.847 0-.8.594-.906.947-.906.37 0 1.04.065.984 1.558z"
        fill="#fff"
        className="storybook-inverted_svg__learnstorybook-box"
      />
      <path
        d="M9.388 7.732c0 .391 2.635.204 2.988-.071 0-2.664-1.429-4.064-4.047-4.064-2.617 0-4.084 1.422-4.084 3.554 0 3.714 5.013 3.786 5.013 5.811 0 .57-.279.907-.892.907-.798 0-1.113-.408-1.076-1.794 0-.3-3.045-.394-3.138 0-.236 3.36 1.857 4.328 4.252 4.328 2.32 0 4.14-1.237 4.14-3.476 0-3.98-5.087-3.874-5.087-5.847 0-.8.594-.906.947-.906.37 0 1.04.065.984 1.558zm2.56-7.54L13.88.07l.081 2.308a.15.15 0 0 1-.243.123l-.743-.586-.88.668a.15.15 0 0 1-.241-.126l.094-2.266z"
        fill="transparent"
        className="storybook-inverted_svg__learnstorybook-s"
      />
      <path
        d="M22.724 15.665V4.386h2.496v9.248h5.04v2.033h-7.536zm15.808-3.471h-5.12c.075.629.28 1.085.616 1.367.336.283.813.425 1.432.425a3.81 3.81 0 0 0 1.208-.2c.4-.134.765-.323 1.096-.569l.64 1.617a4.38 4.38 0 0 1-1.4.704c-.55.17-1.101.255-1.656.255-1.323 0-2.365-.365-3.128-1.095-.763-.731-1.144-1.726-1.144-2.985 0-.8.165-1.509.496-2.127.33-.62.79-1.102 1.376-1.449.587-.346 1.253-.52 2-.52 1.099 0 1.97.358 2.616 1.073.645.714.968 1.685.968 2.912v.591zm-3.52-2.913c-.459 0-.824.147-1.096.44-.272.294-.44.718-.504 1.272H36.5c-.032-.565-.173-.991-.424-1.28-.25-.288-.605-.431-1.064-.431zm8.464-1.664c1.173 0 2.04.278 2.6.833.56.554.84 1.413.84 2.575v4.64h-2.288v-1.167c-.16.405-.427.722-.8.952-.373.229-.81.344-1.312.344a3.226 3.226 0 0 1-1.448-.32 2.536 2.536 0 0 1-1.024-.896 2.292 2.292 0 0 1-.376-1.28c0-.577.147-1.03.44-1.36.293-.331.765-.571 1.416-.72.65-.15 1.541-.225 2.672-.225h.416v-.287c0-.47-.101-.8-.304-.992-.203-.193-.555-.289-1.056-.289-.384 0-.81.07-1.28.208-.47.14-.917.331-1.344.577l-.64-1.617c.448-.277 1-.509 1.656-.696a6.719 6.719 0 0 1 1.832-.28zm-.432 6.513c.47 0 .848-.158 1.136-.473.288-.314.432-.722.432-1.223v-.272h-.272c-.864 0-1.47.069-1.816.207-.347.14-.52.39-.52.752 0 .289.099.528.296.72.197.193.445.289.744.289zM54.34 9.6l-1.36.144c-.672.065-1.147.254-1.424.569-.277.314-.416.733-.416 1.255v4.096h-2.416V7.81h2.32v1.327c.395-.906 1.21-1.402 2.448-1.488l.704-.048.144 2zm5.728-1.984c.939 0 1.637.275 2.096.824.459.55.688 1.38.688 2.489v4.736h-2.416V11.04c0-.533-.099-.922-.296-1.168-.197-.245-.504-.367-.92-.367-.501 0-.904.16-1.208.48-.304.32-.456.746-.456 1.28v4.4H55.14V7.808h2.352v1.12a2.753 2.753 0 0 1 1.08-.976 3.266 3.266 0 0 1 1.496-.336zm13.2 8.192a8.787 8.787 0 0 1-2.464-.343c-.79-.23-1.445-.547-1.968-.952l.8-1.776c1.088.757 2.31 1.136 3.664 1.136.704 0 1.245-.115 1.624-.345.379-.229.568-.546.568-.951 0-.363-.173-.646-.52-.848-.347-.203-.963-.4-1.848-.593-.992-.202-1.784-.447-2.376-.736-.592-.288-1.024-.642-1.296-1.063-.272-.422-.408-.942-.408-1.56 0-.683.19-1.291.568-1.824.379-.534.91-.952 1.592-1.256.683-.305 1.472-.457 2.368-.457.8 0 1.57.118 2.312.353.741.234 1.33.549 1.768.943l-.8 1.777c-1.035-.758-2.123-1.136-3.264-1.136-.65 0-1.163.125-1.536.375-.373.251-.56.595-.56 1.032 0 .257.072.467.216.632.144.166.384.312.72.44.336.129.813.262 1.432.4 1.45.32 2.493.731 3.128 1.232.635.502.952 1.195.952 2.08 0 1.067-.41 1.907-1.232 2.52-.821.614-1.968.92-3.44.92zm10.464-1.791c.245 0 .501-.016.768-.049l-.128 1.76c-.31.043-.619.065-.928.065-1.195 0-2.067-.262-2.616-.785-.55-.522-.824-1.317-.824-2.383V9.617h-1.488V7.808h1.488V5.505h2.416V7.81h1.968v1.808H82.42v2.992c0 .94.437 1.409 1.312 1.409zm5.616 1.775c-.832 0-1.563-.167-2.192-.503a3.534 3.534 0 0 1-1.456-1.424c-.341-.614-.512-1.336-.512-2.168 0-.833.17-1.555.512-2.168a3.484 3.484 0 0 1 1.456-1.416c.63-.331 1.36-.497 2.192-.497.832 0 1.563.166 2.192.497.63.33 1.115.802 1.456 1.415.341.614.512 1.336.512 2.168 0 .833-.17 1.555-.512 2.169a3.534 3.534 0 0 1-1.456 1.424c-.63.336-1.36.504-2.192.504zm0-1.84c1.173 0 1.76-.751 1.76-2.255 0-.758-.152-1.323-.456-1.697-.304-.373-.739-.56-1.304-.56-1.173 0-1.76.752-1.76 2.256 0 1.505.587 2.257 1.76 2.257zm11.248-4.351-1.36.143c-.672.065-1.147.254-1.424.569-.277.314-.416.733-.416 1.255v4.096H94.98V7.81h2.32v1.327c.395-.906 1.21-1.402 2.448-1.488l.704-.048.144 2zm6.72-1.777h2.368l-4.736 10.72H102.5l1.504-3.312-3.232-7.408h2.512l1.984 4.993 2.048-4.992zm7.968-.208c.683 0 1.285.166 1.808.497.523.33.93.802 1.224 1.415.293.614.44 1.326.44 2.136 0 .811-.147 1.528-.44 2.153-.293.624-.704 1.109-1.232 1.456a3.206 3.206 0 0 1-1.8.52 3.12 3.12 0 0 1-1.472-.345 2.449 2.449 0 0 1-1.008-.951v1.168h-2.384V4.386h2.416v4.48a2.388 2.388 0 0 1 1-.92 3.16 3.16 0 0 1 1.448-.329zm-.704 6.337c.565 0 1.003-.2 1.312-.6.31-.4.464-.963.464-1.688 0-.715-.155-1.262-.464-1.64-.31-.38-.747-.569-1.312-.569-.565 0-1.003.195-1.312.584-.31.39-.464.942-.464 1.656 0 .726.155 1.283.464 1.673.31.389.747.584 1.312.584zm9.424 1.84c-.832 0-1.563-.168-2.192-.505a3.534 3.534 0 0 1-1.456-1.423c-.341-.614-.512-1.336-.512-2.168 0-.833.17-1.555.512-2.168a3.484 3.484 0 0 1 1.456-1.416c.63-.331 1.36-.497 2.192-.497.832 0 1.563.166 2.192.497.63.33 1.115.802 1.456 1.415.341.614.512 1.336.512 2.168 0 .833-.17 1.555-.512 2.169a3.534 3.534 0 0 1-1.456 1.424c-.63.336-1.36.504-2.192.504zm0-1.84c1.173 0 1.76-.752 1.76-2.257 0-.757-.152-1.322-.456-1.695-.304-.374-.739-.56-1.304-.56-1.173 0-1.76.751-1.76 2.255 0 1.505.587 2.257 1.76 2.257zm9.408 1.84c-.832 0-1.563-.168-2.192-.505a3.534 3.534 0 0 1-1.456-1.423c-.341-.614-.512-1.336-.512-2.168 0-.833.17-1.555.512-2.168a3.484 3.484 0 0 1 1.456-1.416c.63-.331 1.36-.497 2.192-.497.832 0 1.563.166 2.192.497.63.33 1.115.802 1.456 1.415.341.614.512 1.336.512 2.168 0 .833-.17 1.555-.512 2.169a3.534 3.534 0 0 1-1.456 1.424c-.63.336-1.36.504-2.192.504zm0-1.84c1.173 0 1.76-.752 1.76-2.257 0-.757-.152-1.322-.456-1.695-.304-.374-.739-.56-1.304-.56-1.173 0-1.76.751-1.76 2.255 0 1.505.587 2.257 1.76 2.257zm14.016 1.711h-2.96l-3.008-3.503v3.503h-2.416V4.386h2.416v6.784l2.896-3.344h2.88l-3.296 3.744 3.488 4.096z"
        fill="#fff"
        className="storybook-inverted_svg__learnstorybook-text"
      />
    </g>
  </svg>
);

export default SvgStorybookInverted;