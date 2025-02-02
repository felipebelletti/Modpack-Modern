﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    /// <summary>
    /// A .NET Representation of a Patchouli Page for Spotlights
    /// <para></para>
    /// <a href="https://vazkiimods.github.io/Patchouli/docs/patchouli-basics/page-types/#spotlight-pages-patchoulispotlight">Patchouli Docs</a>
    /// </summary>
    [Serializable, JsonObject]
    public class SpotlightPage : PatchouliPage
    {
        public override string Type => "patchouli:spotlight";

        [JsonProperty("item")]
        public required string Item { get; set; }

        [JsonProperty("title")]
        public string? Title { get; set; }

        [JsonProperty("link_recipe")]
        public bool LinkRecipe { get; set; } = false;

        [JsonProperty("text")]
        public string? Text { get; set; }
    }
}
