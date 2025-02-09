package com.cocktailpick.back.tag.service;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;

import com.cocktailpick.back.common.csv.OpenCsvReader;
import com.cocktailpick.back.tag.Fixtures;
import com.cocktailpick.back.tag.domain.Tag;
import com.cocktailpick.back.tag.domain.TagType;

class TagCsvReaderTest {
	private MultipartFile multipartFile;

	@BeforeEach
	void setUp() {
		String content = Fixtures.THREE_TAGS_CSV_CONTENT;
		multipartFile = new MockMultipartFile("file", "태그.csv", "text/csv",
			content.getBytes());
	}

	@Test
	void getTags() {
		TagCsvReader tagCsvReader = new TagCsvReader(OpenCsvReader.from(multipartFile));

		List<Tag> actual = tagCsvReader.getTags();

		assertAll(
			() -> assertThat(actual).hasSize(3),
			() -> assertThat(actual.get(0).getName()).isEqualTo("두강"),
			() -> assertThat(actual.get(0).getTagType()).isEqualTo(TagType.CONCEPT.getTagType()),
			() -> assertThat(actual.get(1).getName()).isEqualTo("두중"),
			() -> assertThat(actual.get(1).getTagType()).isEqualTo(TagType.ABV.getTagType()),
			() -> assertThat(actual.get(2).getName()).isEqualTo("두약"),
			() -> assertThat(actual.get(2).getTagType()).isEqualTo(TagType.INGREDIENT.getTagType())
		);
	}
}